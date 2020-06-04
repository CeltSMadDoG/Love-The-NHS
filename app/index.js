import clock from "clock";
import document from "document";
import { preferences } from "user-settings";
import { today } from "user-activity";
import { HeartRateSensor } from "heart-rate";
import { battery } from "power";
import {  
  calculateDistance,
  getDisplayMonth, 
  getDisplayDay, 
  zeroPad,
} from "../common/utils";

// Update the clock every minute
clock.granularity = "minutes";

// Get a handle on the <text> element
const lblFloors = document.getElementById("floors");
const lblMove = document.getElementById("move");
const lblSteps = document.getElementById("steps");
const lblDist = document.getElementById("dist");
const lblHR = document.getElementById("hrm");
const lblDate = document.getElementById("date");
const lblDay = document.getElementById("day");
const lblTime = document.getElementById("time");

const hrm = new HeartRateSensor();
    hrm.addEventListener("reading", () => {
      //Update heart rate here.
      lblHR.text = `${hrm.heartRate}`;
    });
   

    hrm.start();

// Update the <text> element every tick with the current time
clock.ontick = (evt) => {
  const now = evt.date;
  const month = now.getMonth();
  const dayOfMonth =now.getDate();
  const day = now.getDay();
  const hours = now.getHours();
  const mins = zeroPad(now.getMinutes());
  
  const displayMonth =  getDisplayMonth (month);
  
  const displayDay = getDisplayDay(day);
  
  
  const { clockDisplay } = preferences;
  const displayHours = clockDisplay === "12h" ? hours % 12 || 12 : zeroPad(hours);
  
  
  
  lblFloors.text = today.local.elevationGain;
  lblMove.text = today.local.activeMinutes;
  lblSteps.text = today.local.steps;
  lblDist.text = calculateDistance(today.local.distance);
  lblDate.text = `${dayOfMonth} ${displayMonth}`;
  lblDay.text = `${displayDay}`;
  lblTime.text = `${displayHours}:${mins}`;
  
  
}
