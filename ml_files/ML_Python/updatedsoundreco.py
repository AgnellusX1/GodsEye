import speech_recognition as sr
import time, datetime
from time import ctime
import winsound

frequency = 2500
duration = 1000
r = sr.Recognizer()
then = datetime.datetime.now() + datetime.timedelta(seconds=60)  
with sr.Microphone() as source:
    print("WARNING:Do not speak during test!\n All the best for the test.\n")

    count = 0

    while then > datetime.datetime.now():  
        while count < 3: 
            try:
                r.adjust_for_ambient_noise(source) #External sound
                audio = r.listen(source)
                text = r.recognize_google(audio)
                print( "\n ALERT! You were warned not to speak during test!\n If this happens more than 3 times then you will be disqualified from the test.\n\n")
                print("Recording time:", ctime())
                print("You said:", text)
                count = count + 1
                print("Warning:", count)
                winsound.Beep(frequency, duration)
                if count == 3:
                    print("This was your last warning. \nYou have been disqualified form the test.")
                    break
                continue

            except:
                print("No sound detected. Good going.")
                break
print("The End!")
