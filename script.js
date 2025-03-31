let currentSet = 0; // 0 for Guitar, 1 for Drums  
        const guitarKeys = document.getElementById('guitarKeys');  
        const drumKeys = document.getElementById('drumKeys');  

        // Show initial keys (guitar)  
        guitarKeys.style.display = 'flex';  

        function toggleKeys() {  
            if (currentSet === 0) {  
                guitarKeys.style.display = 'none'; // Hide guitar keys  
                drumKeys.style.display = 'flex'; // Show drum keys  
                currentSet = 1; // Set to drum  
            } else {  
                drumKeys.style.display = 'none'; // Hide drum keys  
                guitarKeys.style.display = 'flex'; // Show guitar keys  
                currentSet = 0; // Set to guitar  
            }  
        }  
        
        function changeSlide(direction) {  
            // For this example, we only use "toggle" to switch  
            toggleKeys();  
        }  

        document.querySelectorAll('.key').forEach(key => {  
            key.addEventListener('click', () => {  
                const code = key.getAttribute('data-key');  
                const audio = document.querySelector(`audio[data-key="${code}"]`);  
                if (audio) {  
                    audio.currentTime = 0; // Reset sound  
                    audio.play(); // Play sound  
                    key.classList.add('playing'); // Show visual feedback  
                }  
            });  
        });  