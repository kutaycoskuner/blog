<script>
    // 💡 No need for Svelte's createEventDispatcher() here.
    // We will dispatch a native CustomEvent.

    function handleSomething(event) {
        console.log('component side - Dispatching native CustomEvent');
        
        // 1. Create a native CustomEvent
        const customEvent = new CustomEvent('myEvent', {
            detail: "some data", 
            bubbles: true, // Crucial for bubbling up the DOM
            composed: true // Allows the event to cross Shadow DOM boundaries (good practice)
        });

        // 2. Dispatch the event from the button's target element
        // event.currentTarget is the <button>
        event.currentTarget.dispatchEvent(customEvent); 
    }
</script>

<button on:click={handleSomething}>Trigger</button>