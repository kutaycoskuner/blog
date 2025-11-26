using System;
using UnityEngine;
using UnityEngine.InputSystem;

public class PseudoIsometricCamera : MonoBehaviour
{
    [Header("References")]
    public Camera cam;
    public Vector3 camTarget;
    public Vector3 camPosition;
    public Vector3 camDistance;
    private Vector3 baseCamDistance;

    [Header("Movement Settings")]
    private float baseSpeed = 5.0f;
    private Vector3 planarMoveVector;

    [Header("Rotation Settings")]
    private float rotateStepDeg = 30.0f;
    private float currentUpRotationInDeg = 0.0f;
    private float targetUpRotationInDeg = 0.0f;
    private float rotationLerpSpeed = 10.0f;
    private Quaternion currentRotationQuaternion;

    [Header("Zoom Settings")]
    private float minZoomMultiplier = .4f;
    private float maxZoomMultiplier = 2.0f;
    private float zoomStep = 0.2f;
    private float currentZoomScale = 1.0f;
    private float targetZoomScale = 1.0f;
    private float zoomLerpSpeed = 10.0f;

    public InputActionAsset inputAction;
    private InputAction moveInputAction;
    private InputAction rotateInputAction;
    private InputAction zoomInputAction;


    // Start is called once before the first execution of Update after the MonoBehaviour is created
    void Start()
    {
        setCameraParameters();
        SetInputActions();
    }

    // Update is called once per frame
    void Update()
    {
        HandleZoom();
        HandleRotation();
        HandleMovement();
        UpdateCamera();
    }

    private void HandleMovement()
    {
        if (moveInputAction == null) return;
        Vector2 moveInput = moveInputAction.ReadValue<Vector2>();

        // safegauard
        if (moveInput.magnitude < 0.02f) return;

        // move relative to camera rotation on XZ plane
        Vector3 forward = cam.transform.forward;
        Vector3 right = cam.transform.right;

        forward.y = 0;
        right.y = 0;

        forward.Normalize();
        right.Normalize();

        planarMoveVector = (right * moveInput.x + forward * moveInput.y)
                     * baseSpeed * Time.deltaTime;

    }

    void HandleRotation()
    {
        // safeguard
        if (rotateInputAction == null) return;

        if (rotateInputAction.WasPressedThisFrame())
        {
            float rotateAxisSign = -rotateInputAction.ReadValue<float>();
            float rotationInDeg = rotateStepDeg * rotateAxisSign;
            targetUpRotationInDeg += rotationInDeg;
            targetUpRotationInDeg %= 360.0f;
        }

        currentUpRotationInDeg = Mathf.LerpAngle(currentUpRotationInDeg, targetUpRotationInDeg, rotationLerpSpeed * Time.deltaTime);
        currentUpRotationInDeg %= 360.0f;
        if (Mathf.Abs(currentUpRotationInDeg - targetUpRotationInDeg) < 0.05f)
        {
            currentUpRotationInDeg = targetUpRotationInDeg;
            return;
        }
    }

    void HandleZoom()
    {
        // safeguard
        if (zoomInputAction == null) return;
        // only react once per key scroll/press
        if (zoomInputAction.WasPressedThisFrame())
        {
            float zoomDelta = zoomInputAction.ReadValue<float>();
            targetZoomScale -= zoomDelta * zoomStep;
            targetZoomScale = Mathf.Clamp(targetZoomScale, minZoomMultiplier, maxZoomMultiplier);
        }

        // smoothly interpolate actual zoom
        currentZoomScale = Mathf.Lerp(currentZoomScale, targetZoomScale, zoomLerpSpeed * Time.deltaTime);
        //if no visible change, skip
        if (Mathf.Abs(currentZoomScale - targetZoomScale) < 0.02f)
        {
            currentZoomScale = targetZoomScale;
            return;
        }
    }

    void setCameraParameters()
    {
        // safeguard to check if everything nicely assigned
        camTarget = Vector3.zero;
        camPosition = new Vector3(0, 6, -10);

        if (cam == null || camTarget == null || camPosition == null)
        {
            Debug.LogError("CameraRig setup incomplete! Assign all references.");
            return;
        }

        cam.transform.position = camPosition;
        camDistance = camTarget - camPosition;
        baseCamDistance = camDistance;
        cam.transform.forward = camDistance.normalized;
    }

    public void SetInputActions()
    {
        var cameraMap = inputAction.FindActionMap("CameraActionMap", true);

        moveInputAction = cameraMap.FindAction("Movement", true);
        moveInputAction.Enable();

        rotateInputAction = cameraMap.FindAction("Rotate", true);
        rotateInputAction.Enable();

        zoomInputAction = cameraMap.FindAction("Zoom", true);
        zoomInputAction.Enable();
    }

    private void UpdateCamera()
    {
        // change camera variables if there is rotation or zoom
        if (currentUpRotationInDeg != targetUpRotationInDeg || currentZoomScale != targetZoomScale)
        {
            currentRotationQuaternion = Quaternion.Euler(0, currentUpRotationInDeg, 0);
            camPosition = camTarget - currentRotationQuaternion * baseCamDistance * currentZoomScale;
        }

        // change camera variable if there is movement
        if (planarMoveVector.magnitude > 0.02f)
        {
            camTarget += planarMoveVector;
            camPosition += planarMoveVector;
            planarMoveVector = Vector3.zero;
        }

        // apply changes if there is change in camera position
        if (cam.transform.position != camPosition)
        {
            camDistance = camTarget - camPosition;
            cam.transform.position = camPosition;
            cam.transform.LookAt(camTarget);
        }
    }

}
