<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Simple JS Stopwatch</title>
    <style>
        /* CSS for Styling */
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            background-color: #f4f4f9;
            margin: 0;
        }

        .container {
            text-align: center;
            background: #fff;
            padding: 2rem;
            border-radius: 15px;
            box-shadow: 0 10px 25px rgba(0,0,0,0.1);
            width: 300px;
        }

        #display {
            font-size: 3rem;
            font-weight: bold;
            color: #333;
            margin-bottom: 1.5rem;
            font-variant-numeric: tabular-nums;
        }

        .buttons button {
            padding: 10px 20px;
            font-size: 1rem;
            margin: 5px;
            cursor: pointer;
            border: none;
            border-radius: 5px;
            transition: opacity 0.2s;
        }

        #startStopBtn { background-color: #28a745; color: white; }
        #resetBtn { background-color: #dc3545; color: white; }
        button:hover { opacity: 0.8; }
        button:active { transform: translateY(1px); }
    </style>
</head>
<body>

    <div class="container">
        <div id="display">00:00:00</div>
        <div class="buttons">
            <button id="startStopBtn" onclick="startStop()">Start</button>
            <button id="resetBtn" onclick="reset()">Reset</button>
        </div>
    </div>

    <script>
        // JavaScript Logic
        let startTime;
        let elapsedTime = 0;
        let timerInterval;

        function timeToString(time) {
            let diffInHrs = time / 3600000;
            let hh = Math.floor(diffInHrs);

            let diffInMin = (diffInHrs - hh) * 60;
            let mm = Math.floor(diffInMin);

            let diffInSec = (diffInMin - mm) * 60;
            let ss = Math.floor(diffInSec);

            let diffInMs = (diffInSec - ss) * 100;
            let ms = Math.floor(diffInMs);

            let formattedMM = mm.toString().padStart(2, "0");
            let formattedSS = ss.toString().padStart(2, "0");
            let formattedMS = ms.toString().padStart(2, "0");

            return `${formattedMM}:${formattedSS}:${formattedMS}`;
        }

        function print(txt) {
            document.getElementById("display").innerHTML = txt;
        }

        function startStop() {
            const btn = document.getElementById("startStopBtn");
            
            if (btn.innerHTML === "Start") {
                // START logic
                startTime = Date.now() - elapsedTime;
                timerInterval = setInterval(function printTime() {
                    elapsedTime = Date.now() - startTime;
                    print(timeToString(elapsedTime));
                }, 10);
                btn.innerHTML = "Stop";
                btn.style.backgroundColor = "#ffc107"; // Switch to yellow
            } else {
                // STOP logic
                clearInterval(timerInterval);
                btn.innerHTML = "Start";
                btn.style.backgroundColor = "#28a745"; // Back to green
            }
        }

        function reset() {
            clearInterval(timerInterval);
            print("00:00:00");
            elapsedTime = 0;
            const btn = document.getElementById("startStopBtn");
            btn.innerHTML = "Start";
            btn.style.backgroundColor = "#28a745";
        }
    </script>
</body>
</html>
