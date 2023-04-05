#!/usr/bin/env python3
import time
import pygame
from plyer import notification


if __name__ == "__main__":
    while True:
        # Play sound
        pygame.init()
        pygame.mixer.music.load(
            "/home/corey/Documents/GIGS/py/mixkit-scanning-sci-fi-alarm-905.wav"
        )
        pygame.mixer.music.play()
        time.sleep(5)  # play for 5 seconds
        pygame.mixer.music.stop()

        # Show notification
        notification.notify(
            title="Time to take a break 💪",
            message="Yoh! ssup get some rest, stretch, drink some water too💧",
            timeout=60,
            # message="Hey, It's time to take a break and stretch! Take a few minutes to relax and drink some water💧🌹",
            #  message="Hey babe❤️😍, it's time to take a break and stretch! Take a few minutes to relax, drink some water💧, and take care of yourself. Corey loves you big ❤️. You got this! 🌹💪",
        )

        # Wait before showing the next notification
        time.sleep(7200)
