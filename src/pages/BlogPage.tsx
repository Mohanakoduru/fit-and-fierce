
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, Calendar, User, ArrowRight, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import BlogCard from '@/components/BlogCard';

// Full blog post content data
const blogPostDetails = {
  '1': {
    id: '1',
    title: '10 Essential Strength Training Exercises for Beginners',
    excerpt: 'Learn the fundamental strength training movements that will help you build a solid foundation and prevent injuries.',
    image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    date: 'April 8, 2025',
    author: 'Mike Johnson',
    category: 'Strength Training',
    content: `<p>Whether you're just starting your fitness journey or looking to add strength training to your routine, mastering the fundamentals is crucial for building a solid foundation and preventing injuries.</p>

<p>In this comprehensive guide, we'll cover the 10 essential strength training exercises every beginner should incorporate into their workout routine. These movements target all major muscle groups and form the building blocks for more advanced training as you progress.</p>

<h3>Why Strength Training Matters</h3>

<p>Before diving into the exercises, let's quickly review why strength training is so beneficial:</p>

<ul>
  <li>Increases muscle mass and strength</li>
  <li>Improves bone density</li>
  <li>Boosts metabolism and aids in weight management</li>
  <li>Enhances functional fitness for daily activities</li>
  <li>Reduces risk of injury</li>
  <li>Improves posture and body mechanics</li>
</ul>

<h3>Exercise #1: Squats</h3>

<p>The squat is often called the king of all exercises, and for good reason. This compound movement targets your quadriceps, hamstrings, glutes, and core while also engaging your lower back and calves.</p>

<p><strong>How to perform:</strong></p>

<ol>
  <li>Stand with feet shoulder-width apart</li>
  <li>Extend arms straight out in front for balance or hold them at chest level</li>
  <li>Keeping your chest up and back straight, bend at the knees and hips as if sitting in a chair</li>
  <li>Lower until thighs are parallel to the ground (or as far as mobility allows)</li>
  <li>Push through your heels to return to standing</li>
</ol>

<p><strong>Pro tip:</strong> Focus on keeping your knees tracking over your toes and your weight in your heels, not your toes.</p>

<h3>Exercise #2: Push-Ups</h3>

<p>Push-ups are a foundational upper body exercise that primarily targets your chest, shoulders, and triceps while engaging your core muscles.</p>

<p><strong>How to perform:</strong></p>

<ol>
  <li>Begin in a plank position with hands slightly wider than shoulder-width apart</li>
  <li>Keep your body in a straight line from head to heels</li>
  <li>Lower your chest toward the floor by bending your elbows</li>
  <li>Push back up to the starting position</li>
</ol>

<p><strong>Modification:</strong> If a standard push-up is too challenging, start with elevated push-ups by placing your hands on a bench or counter, or try push-ups from your knees.</p>

<h3>Exercise #3: Deadlifts</h3>

<p>The deadlift is an excellent full-body exercise that focuses on your posterior chain (hamstrings, glutes, lower back) while also working your grip, core, and upper back.</p>

<p><strong>How to perform:</strong></p>

<ol>
  <li>Stand with feet hip-width apart and a barbell or dumbbells in front of you</li>
  <li>Hinge at the hips with a slight bend in the knees, keeping your back flat</li>
  <li>Grip the weight with hands just outside your legs</li>
  <li>Lift the weight by driving your hips forward and standing tall</li>
  <li>Lower the weight back down with control</li>
</ol>

<p><strong>Pro tip:</strong> Start with lighter weights to master the form before progressively adding more resistance.</p>

<h3>Exercise #4: Rows</h3>

<p>Rows target your upper back muscles, which are essential for good posture and balance out pushing exercises like push-ups.</p>

<p><strong>How to perform (dumbbell row):</strong></p>

<ol>
  <li>Place your right hand and right knee on a bench</li>
  <li>With your left foot on the ground, hold a dumbbell in your left hand</li>
  <li>Keep your back flat and pull the dumbbell up toward your side</li>
  <li>Lower with control and repeat</li>
  <li>Switch sides after completing all reps</li>
</ol>

<p><strong>Alternative:</strong> If you have access to a cable machine, seated cable rows are another great option for beginners.</p>

<h3>Exercise #5: Lunges</h3>

<p>Lunges are excellent for developing unilateral (one-sided) lower body strength and improving balance and coordination.</p>

<p><strong>How to perform (forward lunge):</strong></p>

<ol>
  <li>Stand tall with feet hip-width apart</li>
  <li>Take a step forward with your right foot</li>
  <li>Lower your body until both knees are bent at approximately 90-degree angles</li>
  <li>Push through the right heel to return to the starting position</li>
  <li>Repeat with the left leg</li>
</ol>

<p><strong>Variations:</strong> Once you master the forward lunge, try reverse lunges, lateral lunges, or walking lunges for variety.</p>

<h3>Exercise #6: Overhead Press</h3>

<p>The overhead press builds shoulder strength and stability while engaging your core and upper back.</p>

<p><strong>How to perform:</strong></p>

<ol>
  <li>Stand with feet shoulder-width apart</li>
  <li>Hold dumbbells at shoulder height with palms facing forward</li>
  <li>Press the weights overhead until arms are fully extended</li>
  <li>Lower the weights back to shoulder height with control</li>
</ol>

<p><strong>Pro tip:</strong> Avoid arching your back by engaging your core throughout the movement.</p>

<h3>Exercise #7: Planks</h3>

<p>Planks are an isometric exercise that strengthens your entire core, including deep stabilizing muscles.</p>

<p><strong>How to perform:</strong></p>

<ol>
  <li>Begin in a push-up position but with weight on your forearms</li>
  <li>Keep your body in a straight line from head to heels</li>
  <li>Engage your core by drawing your navel toward your spine</li>
  <li>Hold the position for 20-60 seconds</li>
</ol>

<p><strong>Progression:</strong> As you build strength, increase the duration or try variations like side planks.</p>

<h3>Exercise #8: Romanian Deadlifts</h3>

<p>The Romanian deadlift specifically targets your hamstrings and glutes while teaching proper hip hinge mechanics.</p>

<p><strong>How to perform:</strong></p>

<ol>
  <li>Stand holding weights in front of your thighs</li>
  <li>With a slight bend in your knees, hinge at the hips and push your butt back</li>
  <li>Lower the weights while keeping them close to your legs</li>
  <li>Stop when you feel a stretch in your hamstrings</li>
  <li>Return to standing by driving your hips forward</li>
</ol>

<p><strong>Pro tip:</strong> Keep your back flat and shoulders pulled back throughout the movement.</p>

<h3>Exercise #9: Bench Press</h3>

<p>The bench press is a classic chest exercise that also works your shoulders and triceps.</p>

<p><strong>How to perform:</strong></p>

<ol>
  <li>Lie on a flat bench with feet on the floor</li>
  <li>Hold dumbbells or a barbell above your chest with arms extended</li>
  <li>Lower the weight to chest level with elbows at about 45 degrees from your body</li>
  <li>Press the weight back up to the starting position</li>
</ol>

<p><strong>Safety note:</strong> When using a barbell, have a spotter or use a power rack with safety pins when possible.</p>

<h3>Exercise #10: Lat Pulldowns</h3>

<p>Lat pulldowns target your latissimus dorsi (the large back muscles), helping develop upper body strength and improve posture.</p>

<p><strong>How to perform:</strong></p>

<ol>
  <li>Sit at a lat pulldown machine with thighs secured under the pads</li>
  <li>Grip the bar with hands wider than shoulder-width apart</li>
  <li>Pull the bar down to your upper chest while keeping your back straight</li>
  <li>Slowly return the bar to the starting position</li>
</ol>

<p><strong>Alternative:</strong> If you don't have access to a machine, assisted pull-ups or inverted rows can be good substitutes.</p>

<h3>Creating Your Beginner Strength Training Program</h3>

<p>Now that you're familiar with these essential exercises, here's how to structure a beginner-friendly workout routine:</p>

<ul>
  <li>Start with 2-3 strength training sessions per week</li>
  <li>Perform 2-3 sets of 8-12 repetitions for each exercise</li>
  <li>Begin with lighter weights to master proper form</li>
  <li>Rest 1-2 minutes between sets</li>
  <li>Leave at least one day between sessions for recovery</li>
</ul>

<p>As you become more comfortable with these movements, you can gradually increase the weight, sets, or reps to continue challenging your muscles and making progress.</p>

<h3>Final Thoughts</h3>

<p>Remember that proper form is always more important than lifting heavy weights, especially when you're just starting out. Consider working with a fitness professional for at least a few sessions to ensure you're performing these exercises correctly.</p>

<p>By mastering these 10 fundamental strength training exercises, you'll establish a solid foundation for a lifetime of fitness. Stay consistent, listen to your body, and enjoy the process of becoming stronger!</p>`,
  },
  '2': {
    id: '2',
    title: 'The Ultimate Guide to Post-Workout Nutrition',
    excerpt: 'Discover what to eat after your workouts to maximize recovery, build muscle, and replenish energy stores effectively.',
    image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    date: 'April 5, 2025',
    author: 'Sarah Williams',
    category: 'Nutrition',
    content: `<p>You've just completed an intense workout, pushing your body to its limits. Now what? The food choices you make in the minutes and hours following exercise can significantly impact your recovery, muscle growth, and overall fitness progress.</p>

<p>In this comprehensive guide, we'll explore the science of post-workout nutrition and provide practical recommendations to help you maximize the benefits of your training.</p>

<h3>Why Post-Workout Nutrition Matters</h3>

<p>When you exercise, especially during high-intensity or resistance training, you create microscopic damage to muscle fibers. Your body also depletes glycogen (stored carbohydrates) and loses fluids and electrolytes through sweat. Proper post-workout nutrition addresses these issues by:</p>

<ul>
  <li>Replenishing glycogen stores</li>
  <li>Providing protein for muscle repair and growth</li>
  <li>Rehydrating the body</li>
  <li>Reducing muscle soreness and inflammation</li>
  <li>Supporting immune function</li>
</ul>

<p>Research shows that there's an "anabolic window" after exercise when your body is particularly receptive to nutrients. While recent studies have expanded this window beyond the traditional 30-60 minute recommendation, consuming the right nutrients soon after exercise remains advantageous for optimal recovery.</p>

<h3>Macronutrients: Finding the Right Balance</h3>

<h4>Protein: The Building Block</h4>

<p>Protein provides the amino acids necessary for repairing and building muscle tissue. After a workout, aim for:</p>

<ul>
  <li>0.25-0.3g of protein per kg of body weight (approximately 20-40g for most people)</li>
  <li>High-quality protein sources containing all essential amino acids</li>
</ul>

<p><strong>Ideal protein sources include:</strong></p>

<ul>
  <li>Whey protein (fastest absorbing)</li>
  <li>Chicken or turkey breast</li>
  <li>Fish</li>
  <li>Lean beef</li>
  <li>Eggs</li>
  <li>Greek yogurt</li>
  <li>Plant-based options: soy, pea protein, or a combination of complementary plant proteins</li>
</ul>

<h4>Carbohydrates: Refueling Energy Stores</h4>

<p>Carbohydrates restore depleted glycogen, which is especially important after endurance or high-intensity training. Your carbohydrate needs depend on the type, duration, and intensity of your workout:</p>

<ul>
  <li>For moderate exercise (30-60 minutes): 0.5-0.7g carbs per kg of body weight</li>
  <li>For endurance exercise (1-3 hours): 0.7-1.2g carbs per kg of body weight</li>
  <li>For high-intensity or glycogen-depleting workouts: 1-1.5g carbs per kg of body weight</li>
</ul>

<p><strong>Ideal carbohydrate sources include:</strong></p>

<ul>
  <li>Fruits (bananas, berries, pineapple)</li>
  <li>Whole grains (oats, brown rice, quinoa)</li>
  <li>Starchy vegetables (sweet potatoes, potatoes)</li>
  <li>Milk or yogurt (which also provide protein)</li>
</ul>

<h4>Fats: Supporting or Slowing?</h4>

<p>While healthy fats are essential for overall health, they slow digestion and can delay the delivery of protein and carbohydrates to muscles after exercise. Consider these guidelines:</p>

<ul>
  <li>Limit fat intake immediately post-workout if rapid recovery is your goal</li>
  <li>If your next workout is more than 8 hours away, moderate fat consumption is fine</li>
  <li>Don't completely avoid fats—they play important roles in hormone production and inflammation regulation</li>
</ul>

<h3>Timing: When to Eat After Exercise</h3>

<p>While the "anabolic window" may be wider than previously thought, timing still matters:</p>

<ul>
  <li><strong>Ideally</strong>: Consume a mix of protein and carbohydrates within 45 minutes after finishing your workout</li>
  <li><strong>Practically</strong>: If you had a meal 2-3 hours before your workout, the urgency is reduced—aim to eat within 2 hours post-exercise</li>
  <li><strong>For fasted training</strong>: The post-workout meal becomes more time-sensitive—try to eat within 30 minutes</li>
</ul>

<h3>Hydration: Often Overlooked</h3>

<p>Proper rehydration is crucial for recovery and overall performance. During exercise, you lose water and electrolytes through sweat. After your workout:</p>

<ul>
  <li>Drink 16-24 oz (500-750ml) of fluid for every pound (0.5kg) of body weight lost during exercise</li>
  <li>Include electrolytes, especially sodium, if you're a heavy sweater or completed an intense or long workout</li>
  <li>Monitor your urine color—aim for pale yellow, not clear or dark</li>
</ul>

<p><strong>Hydration options:</strong></p>

<ul>
  <li>Water (for shorter, less intense workouts)</li>
  <li>Sports drinks (for workouts longer than 60 minutes or in hot conditions)</li>
  <li>Tart cherry juice (provides antioxidants and may reduce muscle soreness)</li>
  <li>Chocolate milk (provides protein, carbs, and fluid)</li>
</ul>

<h3>Post-Workout Meal Ideas</h3>

<h4>Quick Options (under 15 minutes)</h4>

<ol>
  <li><strong>Protein smoothie</strong>: Blend whey or plant protein, banana, berries, spinach, and milk/water</li>
  <li><strong>Greek yogurt parfait</strong>: Greek yogurt, granola, fruit, and honey</li>
  <li><strong>Turkey wrap</strong>: Whole grain tortilla, lean turkey, vegetables, and hummus</li>
  <li><strong>Chocolate milk and a banana</strong>: Simple, effective, and research-backed</li>
</ol>

<h4>Complete Meals (when you have more time)</h4>

<ol>
  <li><strong>Salmon with sweet potato and vegetables</strong>: Lean protein, complex carbs, and nutrients</li>
  <li><strong>Chicken stir-fry with rice</strong>: Balanced protein and carbohydrates with vegetables</li>
  <li><strong>Eggs, toast, and fruit</strong>: Perfect breakfast-for-dinner option</li>
  <li><strong>Quinoa bowl with tofu and vegetables</strong>: Plant-based complete protein with whole grains</li>
</ol>

<h3>Special Considerations</h3>

<h4>For Muscle Building</h4>

<p>If hypertrophy (muscle growth) is your primary goal:</p>

<ul>
  <li>Prioritize protein intake (aim for the higher end of recommendations)</li>
  <li>Consider adding leucine-rich foods or supplements (such as whey protein or BCAAs)</li>
  <li>Ensure overall daily caloric surplus (approximately 250-500 calories above maintenance)</li>
</ul>

<h4>For Fat Loss</h4>

<p>If you're training primarily for weight/fat loss:</p>

<ul>
  <li>Still prioritize protein to preserve lean muscle mass</li>
  <li>Moderate carbohydrate intake based on workout intensity</li>
  <li>Focus on nutrient density and satiety</li>
  <li>Remember that total daily caloric intake matters most for fat loss</li>
</ul>

<h4>For Endurance Athletes</h4>

<p>If you're training for endurance events:</p>

<ul>
  <li>Higher carbohydrate intake to restore glycogen (up to 1.2g per kg body weight)</li>
  <li>Include some protein (3:1 or 4:1 carb to protein ratio)</li>
  <li>Pay extra attention to electrolyte replacement</li>
</ul>

<h3>Supplements: Helpful or Hype?</h3>

<p>While whole foods should form the foundation of your post-workout nutrition, certain supplements may offer benefits:</p>

<ul>
  <li><strong>Whey protein</strong>: Convenient, fast-absorbing complete protein</li>
  <li><strong>Creatine monohydrate</strong>: Well-researched for improving strength and recovery</li>
  <li><strong>BCAAs (Branched-Chain Amino Acids)</strong>: May help reduce muscle soreness and support recovery</li>
  <li><strong>Tart cherry extract</strong>: May reduce inflammation and muscle soreness</li>
</ul>

<p>Remember that supplements are just that—supplemental to a solid nutrition plan, not replacements for whole foods.</p>

<h3>Listen to Your Body</h3>

<p>While these guidelines provide a solid framework, individual needs vary based on:</p>

<ul>
  <li>Body size and composition</li>
  <li>Training experience and goals</li>
  <li>Metabolism and digestive tolerance</li>
  <li>Overall diet quality</li>
</ul>

<p>Pay attention to how different post-workout nutrition strategies affect your energy levels, recovery, and progress over time. Adjust as needed based on your personal response.</p>

<h3>The Bottom Line</h3>

<p>Effective post-workout nutrition doesn't need to be complicated. Focus on these key principles:</p>

<ol>
  <li>Consume adequate protein (20-40g) to support muscle repair</li>
  <li>Include carbohydrates appropriate to your workout intensity and goals</li>
  <li>Rehydrate thoroughly with water and electrolytes</li>
  <li>Time your meal or snack appropriately based on pre-workout nutrition</li>
  <li>Choose a mix of whole foods for optimal nutrient intake</li>
</ol>

<p>By implementing these strategies consistently, you'll enhance your recovery, support your fitness goals, and get more out of every workout you complete.</p>`,
  },
  '3': {
    id: '3',
    title: '5 HIIT Workouts You Can Do in Under 30 Minutes',
    excerpt: 'Short on time? These high-intensity interval training workouts will help you burn fat and improve fitness in minimal time.',
    image: 'https://images.unsplash.com/photo-1599058917765-a780eda07a3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80',
    date: 'April 2, 2025',
    author: 'Lisa Thompson',
    category: 'HIIT',
    content: `<p>In today's fast-paced world, finding time for lengthy workouts can be challenging. The good news? You don't need to spend hours in the gym to get results. High-Intensity Interval Training (HIIT) offers an efficient, effective way to improve cardiovascular fitness, burn calories, and build strength—all in a fraction of the time of traditional workouts.</p>

<p>In this article, we'll share five time-efficient HIIT workouts that you can complete in under 30 minutes, making them perfect for busy schedules. Each workout is designed to deliver maximum results with minimal time investment.</p>

<h3>What Makes HIIT So Effective?</h3>

<p>Before diving into the workouts, let's understand why HIIT is such a powerful training method:</p>

<ul>
  <li><strong>Afterburn Effect</strong>: HIIT creates an "afterburn" effect (excess post-exercise oxygen consumption or EPOC), meaning your body continues burning calories at an elevated rate for hours after your workout</li>
  <li><strong>Time Efficiency</strong>: Research shows that just 15-20 minutes of HIIT can provide similar or even superior benefits compared to 45-60 minutes of steady-state cardio</li>
  <li><strong>Metabolic Impact</strong>: HIIT workouts improve insulin sensitivity and glucose metabolism</li>
  <li><strong>Muscle Preservation</strong>: Unlike traditional cardio, HIIT helps maintain muscle mass while burning fat</li>
  <li><strong>Adaptability</strong>: HIIT can be modified for any fitness level and performed with minimal or no equipment</li>
</ul>

<h3>How to Use These Workouts</h3>

<p>Each workout follows the HIIT principle of alternating between intense work periods and recovery periods. Here are some guidelines:</p>

<ul>
  <li>Always warm up for 3-5 minutes before starting any HIIT session</li>
  <li>Work at your own intensity level—push hard during work intervals (7-9 out of 10 effort level)</li>
  <li>Use the recovery periods to catch your breath, but keep moving if possible</li>
  <li>Start with 2-3 HIIT sessions per week, allowing 48 hours between sessions for recovery</li>
  <li>Cool down and stretch for 5 minutes after completing the workout</li>
</ul>

<h3>Workout #1: Bodyweight Tabata (20 minutes)</h3>

<p>This workout uses the Tabata protocol: 20 seconds of maximum effort followed by 10 seconds of rest. Each exercise is performed for 8 rounds (4 minutes) before moving to the next exercise.</p>

<h4>Warm-up: 3 minutes</h4>
<ul>
  <li>Marching in place</li>
  <li>Arm circles</li>
  <li>Hip rotations</li>
  <li>Light jumping jacks</li>
</ul>

<h4>Main Workout:</h4>
<ol>
  <li><strong>Squat Jumps</strong> - 20 seconds work, 10 seconds rest × 8 rounds
    <ul>
      <li>Stand with feet shoulder-width apart</li>
      <li>Lower into a squat position</li>
      <li>Explosively jump up, reaching arms overhead</li>
      <li>Land softly and immediately lower into the next squat</li>
    </ul>
  </li>
  <li><strong>Push-ups</strong> - 20 seconds work, 10 seconds rest × 8 rounds
    <ul>
      <li>Perform standard push-ups or modify by dropping to your knees</li>
      <li>Focus on maintaining a straight line from head to heels</li>
      <li>Lower chest to just above the floor and push back up</li>
    </ul>
  </li>
  <li><strong>Mountain Climbers</strong> - 20 seconds work, 10 seconds rest × 8 rounds
    <ul>
      <li>Start in a high plank position</li>
      <li>Drive knees toward chest in alternating fashion</li>
      <li>Maintain a tight core and flat back</li>
    </ul>
  </li>
  <li><strong>Burpees</strong> - 20 seconds work, 10 seconds rest × 8 rounds
    <ul>
      <li>Start standing, then drop to a squat position</li>
      <li>Kick feet back to plank, perform a push-up (optional)</li>
      <li>Jump feet back to squat position</li>
      <li>Explosively jump up with arms overhead</li>
    </ul>
  </li>
</ol>

<h4>Cool Down: 3 minutes</h4>
<ul>
  <li>Walking in place</li>
  <li>Deep breathing</li>
  <li>Light stretching for major muscle groups</li>
</ul>

<h3>Workout #2: The Pyramid (25 minutes)</h3>

<p>This workout follows a pyramid structure, increasing work time while decreasing rest time as you climb the pyramid, then decreasing work time while increasing rest as you descend.</p>

<h4>Warm-up: 3 minutes</h4>
<ul>
  <li>Jogging in place</li>
  <li>Arm swings</li>
  <li>Bodyweight squats</li>
  <li>Shoulder rolls</li>
</ul>

<h4>Main Workout:</h4>
<p>Complete the following circuit, performing each exercise consecutively before taking the prescribed rest.</p>

<p>Ascending the pyramid:</p>
<ul>
  <li>30 seconds work, 30 seconds rest</li>
  <li>45 seconds work, 25 seconds rest</li>
  <li>60 seconds work, 20 seconds rest</li>
  <li>75 seconds work, 15 seconds rest</li>
</ul>

<p>Descending the pyramid:</p>
<ul>
  <li>60 seconds work, 20 seconds rest</li>
  <li>45 seconds work, 25 seconds rest</li>
  <li>30 seconds work, 30 seconds rest</li>
</ul>

<p>Exercises (perform in order for each interval):</p>
<ol>
  <li><strong>High Knees</strong>: Run in place, driving knees toward chest</li>
  <li><strong>Alternating Reverse Lunges</strong>: Step backward into a lunge, alternating legs</li>
  <li><strong>Plank Shoulder Taps</strong>: In high plank, touch opposite shoulder with each hand</li>
  <li><strong>Lateral Skaters</strong>: Jump side to side, landing on one foot and reaching the other behind</li>
</ol>

<h4>Cool Down: 3 minutes</h4>
<ul>
  <li>Walking in place</li>
  <li>Deep breathing</li>
  <li>Stretching for quads, hamstrings, calves, and shoulders</li>
</ul>

<h3>Workout #3: EMOM (Every Minute On the Minute) Challenge (21 minutes)</h3>

<p>This EMOM workout requires you to complete a specific number of reps within each minute, then rest for the remainder of that minute before starting the next exercise.</p>

<h4>Warm-up: 3 minutes</h4>
<ul>
  <li>Light cardio (jumping jacks, high knees)</li>
  <li>Dynamic stretches (leg swings, arm circles)</li>
  <li>5 slow squats, 5 slow push-ups</li>
</ul>

<h4>Main Workout: 18 minutes (6 rounds of a 3-minute circuit)</h4>

<p>Repeat this 3-exercise circuit 6 times:</p>

<ol>
  <li><strong>Minute 1</strong>: 15 Jump Squats
    <ul>
      <li>Perform 15 jump squats as quickly as possible with good form</li>
      <li>Rest for the remainder of the minute</li>
    </ul>
  </li>
  <li><strong>Minute 2</strong>: 12 Push-up to Side Plank
    <ul>
      <li>Perform a push-up, then rotate to a side plank, alternating sides</li>
      <li>Complete 12 total (6 per side)</li>
      <li>Rest for the remainder of the minute</li>
    </ul>
  </li>
  <li><strong>Minute 3</strong>: 20 Russian Twists
    <ul>
      <li>Sit on the floor with knees bent and feet slightly elevated</li>
      <li>Lean back slightly and rotate torso to touch the floor on each side</li>
      <li>Complete 20 total touches (10 per side)</li>
      <li>Rest for the remainder of the minute</li>
    </ul>
  </li>
</ol>

<p><strong>Progression</strong>: As your fitness improves, increase the rep counts or add light weights.</p>

<h4>Cool Down: 3 minutes</h4>
<ul>
  <li>Walking in place</li>
  <li>Full-body stretching sequence</li>
</ul>

<h3>Workout #4: Cardio-Strength Superset (28 minutes)</h3>

<p>This workout alternates between cardiovascular and strength exercises, targeting all major muscle groups while keeping your heart rate elevated.</p>

<h4>Warm-up: 4 minutes</h4>
<ul>
  <li>Jogging in place (1 minute)</li>
  <li>Bodyweight squats (1 minute)</li>
  <li>Push-up to downward dog (1 minute)</li>
  <li>Torso twists (1 minute)</li>
</ul>

<h4>Main Workout: 20 minutes</h4>
<p>Perform each pair of exercises as a superset. Complete 40 seconds of Exercise A, then immediately do 40 seconds of Exercise B, followed by 20 seconds rest. Complete 4 rounds of each superset before moving to the next pair.</p>

<p><strong>Superset 1 (8 minutes):</strong></p>
<ul>
  <li>Exercise A: Jumping Jacks</li>
  <li>Exercise B: Squats</li>
  <li>20 seconds rest</li>
  <li>Repeat for 4 rounds</li>
</ul>

<p><strong>Superset 2 (8 minutes):</strong></p>
<ul>
  <li>Exercise A: High Knees</li>
  <li>Exercise B: Alternating Reverse Lunges</li>
  <li>20 seconds rest</li>
  <li>Repeat for 4 rounds</li>
</ul>

<p><strong>Superset 3 (4 minutes):</strong></p>
<ul>
  <li>Exercise A: Mountain Climbers</li>
  <li>Exercise B: Push-ups</li>
  <li>20 seconds rest</li>
  <li>Repeat for 2 rounds</li>
</ul>

<h4>Cool Down: 4 minutes</h4>
<ul>
  <li>Walking in place (1 minute)</li>
  <li>Stretching for all major muscle groups (3 minutes)</li>
</ul>

<h3>Workout #5: 30-20-10 Intervals (24 minutes)</h3>

<p>This workout uses a unique interval structure that alternates between three intensity levels: 30 seconds at moderate pace, 20 seconds at higher intensity, and 10 seconds at maximum effort.</p>

<h4>Warm-up: 3 minutes</h4>
<ul>
  <li>Dynamic movements focusing on the muscles you'll be using</li>
</ul>

<h4>Main Workout: 18 minutes</h4>
<p>Complete 6 rounds of the following circuit with 1 minute rest between rounds:</p>

<p>For each exercise, follow this pattern:</p>
<ul>
  <li>30 seconds: Moderate intensity (about 60% effort)</li>
  <li>20 seconds: High intensity (about 80% effort)</li>
  <li>10 seconds: Maximum intensity (100% effort)</li>
</ul>

<p><strong>Exercises:</strong></p>
<ol>
  <li><strong>Bodyweight Squats</strong>: Progress from moderate pace to fast, then jump squats for the final 10 seconds</li>
  <li><strong>Modified Burpees</strong>: Progress from stepping feet back to jumping feet back, then add a jump at the top for the final 10 seconds</li>
  <li><strong>Speed Skaters</strong>: Progress from smaller lateral jumps to larger ones, then maximum distance for the final 10 seconds</li>
</ol>

<p>Rest 1 minute after completing all three exercises, then repeat for a total of 6 rounds.</p>

<h4>Cool Down: 3 minutes</h4>
<ul>
  <li>Gentle stretching for all major muscle groups</li>
</ul>

<h3>Tips for HIIT Success</h3>

<ol>
  <li><strong>Focus on form</strong>: Even when moving quickly, maintain proper form to prevent injuries</li>
  <li><strong>Modify as needed</strong>: Adjust exercises to match your fitness level</li>
  <li><strong>Progress gradually</strong>: Increase intensity over time as your fitness improves</li>
  <li><strong>Stay hydrated</strong>: Drink water before, during (if needed), and after your workout</li>
  <li><strong>Respect recovery</strong>: Allow adequate rest between HIIT sessions</li>
</ol>

<h3>Final Thoughts</h3>

<p>These 30-minute HIIT workouts prove that effective exercise doesn't require a large time commitment. By working intensely for short periods, you can achieve remarkable fitness improvements while fitting workouts into even the busiest schedule.</p>

<p>Remember that consistency is key—a short workout you actually complete is infinitely more effective than a longer workout you skip due to time constraints. Start with the workout that appeals to you most, and rotate through the others to keep your routine fresh and challenging.</p>

<p>As with any exercise program, consult with a healthcare provider before starting if you have any medical conditions or concerns.</p>`,
  }
};

const BlogPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedBlogPost, setSelectedBlogPost] = useState(null);
  const location = useLocation();
  
  useEffect(() => {
    // Get blog ID from URL query parameters
    const queryParams = new URLSearchParams(location.search);
    const blogId = queryParams.get('id');
    
    if (blogId && blogPostDetails[blogId]) {
      setSelectedBlogPost(blogPostDetails[blogId]);
      // Scroll to the top of the page
      window.scrollTo(0, 0);
    } else {
      setSelectedBlogPost(null);
    }
  }, [location]);
  
  // Mock blog posts data
  const allPosts = [
    {
      id: '1',
      title: '10 Essential Strength Training Exercises for Beginners',
      excerpt: 'Learn the fundamental strength training movements that will help you build a solid foundation and prevent injuries.',
      image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      date: 'April 8, 2025',
      author: 'Mike Johnson',
      category: 'Strength Training',
    },
    {
      id: '2',
      title: 'The Ultimate Guide to Post-Workout Nutrition',
      excerpt: 'Discover what to eat after your workouts to maximize recovery, build muscle, and replenish energy stores effectively.',
      image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      date: 'April 5, 2025',
      author: 'Sarah Williams',
      category: 'Nutrition',
    },
    {
      id: '3',
      title: '5 HIIT Workouts You Can Do in Under 30 Minutes',
      excerpt: 'Short on time? These high-intensity interval training workouts will help you burn fat and improve fitness in minimal time.',
      image: 'https://images.unsplash.com/photo-1599058917765-a780eda07a3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80',
      date: 'April 2, 2025',
      author: 'Lisa Thompson',
      category: 'HIIT',
    },
    {
      id: '4',
      title: 'How to Perfect Your Squat Form: A Comprehensive Guide',
      excerpt: 'Master the king of all exercises with this detailed breakdown of proper squat technique, common mistakes, and helpful variations.',
      image: 'https://images.unsplash.com/photo-1534368786749-b63e05c92392?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      date: 'March 28, 2025',
      author: 'Marcus Chen',
      category: 'Strength Training',
    },
    {
      id: '5',
      title: 'The Science of Sleep and Its Impact on Fitness Results',
      excerpt: 'Understand how sleep affects muscle recovery, weight management, and overall athletic performance — and how to optimize your sleep routine.',
      image: 'https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1160&q=80',
      date: 'March 25, 2025',
      author: 'Dr. Rebecca Chang',
      category: 'Recovery',
    },
    {
      id: '6',
      title: 'Vegan Protein Sources: Building Muscle on a Plant-Based Diet',
      excerpt: 'Discover how to meet your protein needs and build lean muscle while following a vegan or vegetarian diet with these nutrient-rich foods.',
      image: 'https://images.unsplash.com/photo-1610123598195-eea6079a80ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80',
      date: 'March 20, 2025',
      author: 'Sarah Williams',
      category: 'Nutrition',
    },
    {
      id: '7',
      title: 'Yoga Poses to Improve Your Mobility and Prevent Injuries',
      excerpt: 'Incorporate these 8 yoga poses into your routine to enhance flexibility, joint mobility, and reduce your risk of common training injuries.',
      image: 'https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      date: 'March 15, 2025',
      author: 'Jessica Miller',
      category: 'Yoga',
    },
    {
      id: '8',
      title: 'Training for Your First 5K: A 8-Week Plan for Beginners',
      excerpt: 'Follow this beginner-friendly training schedule to successfully prepare for and complete your first 5K race with confidence.',
      image: 'https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      date: 'March 10, 2025',
      author: 'Thomas Reed',
      category: 'Running',
    },
    {
      id: '9',
      title: 'Common Fitness Myths Debunked by Science',
      excerpt: 'Separate fact from fiction as we analyze popular fitness myths and reveal what the scientific research actually tells us about effective training.',
      image: 'https://images.unsplash.com/photo-1579126038374-6064e9370f0f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1174&q=80',
      date: 'March 5, 2025',
      author: 'Dr. Rebecca Chang',
      category: 'Fitness Myths',
    },
  ];

  // Popular categories
  const categories = [
    'Strength Training',
    'Nutrition',
    'HIIT',
    'Yoga',
    'Recovery',
    'Running',
    'Fitness Myths',
    'Weight Loss',
  ];

  // Popular posts
  const popularPosts = allPosts.slice(0, 4);

  // Filter posts based on search term
  const filteredPosts = searchTerm
    ? allPosts.filter(
        post =>
          post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          post.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
          post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : allPosts;

  // Close blog post and return to listing
  const closeBlogPost = () => {
    setSelectedBlogPost(null);
    // Update URL without the blog ID
    window.history.pushState({}, '', '/blog');
  };

  // If a blog post is selected, display the full article
  if (selectedBlogPost) {
    return (
      <div className="py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Main Content - Full Blog Post */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="relative h-64 md:h-96">
                  <img 
                    src={selectedBlogPost.image} 
                    alt={selectedBlogPost.title} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-fitdark to-transparent opacity-50"></div>
                  <button 
                    onClick={closeBlogPost}
                    className="absolute top-4 right-4 bg-white p-2 rounded-full text-fitdark hover:bg-fitgreen hover:text-white transition-colors"
                    aria-label="Close article"
                  >
                    <X size={20} />
                  </button>
                </div>
                
                <div className="p-6 md:p-8">
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="bg-fitgreen/10 text-fitgreen text-xs font-semibold px-3 py-1 rounded-full">
                      {selectedBlogPost.category}
                    </span>
                    <span className="bg-gray-100 text-gray-600 text-xs font-semibold px-3 py-1 rounded-full flex items-center">
                      <Calendar size={12} className="mr-1" />
                      {selectedBlogPost.date}
                    </span>
                    <span className="bg-gray-100 text-gray-600 text-xs font-semibold px-3 py-1 rounded-full flex items-center">
                      <User size={12} className="mr-1" />
                      {selectedBlogPost.author}
                    </span>
                  </div>
                  
                  <h1 className="text-3xl md:text-4xl font-bold mb-6">{selectedBlogPost.title}</h1>
                  
                  <div 
                    className="prose max-w-none prose-headings:text-fitdark prose-headings:font-bold prose-h3:text-2xl prose-h4:text-xl prose-p:text-gray-700 prose-a:text-fitgreen prose-strong:text-fitdark"
                    dangerouslySetInnerHTML={{ __html: selectedBlogPost.content }}
                  />
                  
                  <div className="mt-8 pt-8 border-t border-gray-200">
                    <h3 className="text-xl font-bold mb-4">Share This Article</h3>
                    <div className="flex space-x-4">
                      <button className="bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transition-colors">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                        </svg>
                      </button>
                      <button className="bg-blue-400 text-white p-2 rounded-full hover:bg-blue-500 transition-colors">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.052 10.052 0 01-3.127 1.195 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                        </svg>
                      </button>
                      <button className="bg-red-600 text-white p-2 rounded-full hover:bg-red-700 transition-colors">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm4.5 19.5c-1.5 0-2.7-.75-3.9-1.5-.75.45-1.5.75-2.4.75-3 0-5.4-2.4-5.4-5.4 0-.75.15-1.5.45-2.25-2.25-1.05-3.75-3.45-3.75-6.15C1.5 1.95 4.2 0 7.5 0c2.25 0 3.9.75 5.1 2.25C13.5.75 15.15 0 17.4 0c3.3 0 6 1.95 6 4.95 0 2.7-1.5 5.1-3.75 6.15.3.75.45 1.5.45 2.25 0 3-2.4 5.4-5.4 5.4-.9 0-1.65-.3-2.4-.75-1.2.75-2.4 1.5-3.9 1.5z"/>
                        </svg>
                      </button>
                      <button className="bg-blue-800 text-white p-2 rounded-full hover:bg-blue-900 transition-colors">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                        </svg>
                      </button>
                    </div>
                  </div>
                  
                  <div className="mt-8 pt-8 border-t border-gray-200">
                    <Link to="/blog" onClick={closeBlogPost}>
                      <Button variant="outline" className="flex items-center">
                        <ArrowRight className="mr-2 rotate-180" size={16} />
                        Back to All Articles
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-8">
              {/* Categories */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4 pb-2 border-b">Categories</h3>
                <ul className="space-y-2">
                  {categories.map((category, index) => (
                    <li key={index}>
                      <button
                        onClick={() => {
                          setSelectedBlogPost(null);
                          setSearchTerm(category);
                          window.history.pushState({}, '', '/blog');
                        }}
                        className="text-gray-700 hover:text-fitgreen transition-colors flex items-center"
                      >
                        <ArrowRight size={14} className="mr-2" />
                        {category}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Popular Posts */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4 pb-2 border-b">Popular Posts</h3>
                <div className="space-y-4">
                  {popularPosts.map(post => (
                    <div key={post.id} className="flex gap-3 group">
                      <Link to={`/blog?id=${post.id}`} className="shrink-0">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-16 h-16 object-cover rounded"
                        />
                      </Link>
                      <div>
                        <Link to={`/blog?id=${post.id}`}>
                          <h4 className="font-bold group-hover:text-fitgreen transition-colors line-clamp-2">
                            {post.title}
                          </h4>
                        </Link>
                        <div className="flex items-center text-gray-500 text-xs mt-1">
                          <Calendar size={12} className="mr-1" />
                          <span>{post.date}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Newsletter */}
              <div className="bg-fitgreen text-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4">Get Fitness Tips</h3>
                <p className="mb-6">
                  Subscribe to our newsletter for workout tips, healthy recipes, and expert advice.
                </p>
                <div className="space-y-3">
                  <Input
                    type="email"
                    placeholder="Your email address"
                    className="bg-white border-0"
                  />
                  <Button className="w-full bg-fitdark hover:bg-fitdark/90">
                    Subscribe
                  </Button>
                </div>
              </div>

              {/* Tags */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4 pb-2 border-b">Popular Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {['Workouts', 'Nutrition', 'Strength', 'Cardio', 'Weight Loss', 'Muscle Building', 'Recovery', 'Mobility', 'Mental Health', 'Supplements'].map((tag, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        setSelectedBlogPost(null);
                        setSearchTerm(tag);
                        window.history.pushState({}, '', '/blog');
                      }}
                      className="bg-gray-100 hover:bg-fitgreen hover:text-white px-3 py-1 rounded-full text-sm transition-colors"
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Blog listing view
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-fitdark to-fitdark/90 text-white py-24 md:py-32">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
              Fitness Blog & Resources
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Expert advice, workout tips, nutrition guidance, and success stories to support your fitness journey.
            </p>
            <div className="relative max-w-xl mx-auto">
              <Input
                type="text"
                placeholder="Search articles..."
                className="pl-10 py-6 text-black rounded-full border-0"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold mb-6">
                {searchTerm ? `Search Results for "${searchTerm}"` : 'Latest Articles'}
              </h2>

              {filteredPosts.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {filteredPosts.map(post => (
                    <div key={post.id} className="group">
                      <BlogCard {...post} />
                      <div className="mt-3">
                        <Link to={`/blog?id=${post.id}`} className="text-fitgreen font-semibold flex items-center hover:text-fitblue transition-colors">
                          Read More <ArrowRight size={16} className="ml-1" />
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="bg-white p-8 rounded-lg shadow text-center">
                  <h3 className="text-xl font-bold mb-4">No articles found</h3>
                  <p className="text-gray-600 mb-6">
                    We couldn't find any articles matching your search criteria. Please try different keywords.
                  </p>
                  <Button className="btn-primary" onClick={() => setSearchTerm('')}>
                    View All Articles
                  </Button>
                </div>
              )}

              <div className="mt-10">
                <Button className="btn-outline">Load More Articles</Button>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-8">
              {/* Categories */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4 pb-2 border-b">Categories</h3>
                <ul className="space-y-2">
                  {categories.map((category, index) => (
                    <li key={index}>
                      <button
                        onClick={() => setSearchTerm(category)}
                        className="text-gray-700 hover:text-fitgreen transition-colors flex items-center"
                      >
                        <ArrowRight size={14} className="mr-2" />
                        {category}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Popular Posts */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4 pb-2 border-b">Popular Posts</h3>
                <div className="space-y-4">
                  {popularPosts.map(post => (
                    <div key={post.id} className="flex gap-3 group">
                      <Link to={`/blog?id=${post.id}`} className="shrink-0">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-16 h-16 object-cover rounded"
                        />
                      </Link>
                      <div>
                        <Link to={`/blog?id=${post.id}`}>
                          <h4 className="font-bold group-hover:text-fitgreen transition-colors line-clamp-2">
                            {post.title}
                          </h4>
                        </Link>
                        <div className="flex items-center text-gray-500 text-xs mt-1">
                          <Calendar size={12} className="mr-1" />
                          <span>{post.date}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Newsletter */}
              <div className="bg-fitgreen text-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4">Get Fitness Tips</h3>
                <p className="mb-6">
                  Subscribe to our newsletter for workout tips, healthy recipes, and expert advice.
                </p>
                <div className="space-y-3">
                  <Input
                    type="email"
                    placeholder="Your email address"
                    className="bg-white border-0"
                  />
                  <Button className="w-full bg-fitdark hover:bg-fitdark/90">
                    Subscribe
                  </Button>
                </div>
              </div>

              {/* Tags */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4 pb-2 border-b">Popular Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {['Workouts', 'Nutrition', 'Strength', 'Cardio', 'Weight Loss', 'Muscle Building', 'Recovery', 'Mobility', 'Mental Health', 'Supplements'].map((tag, index) => (
                    <button
                      key={index}
                      onClick={() => setSearchTerm(tag)}
                      className="bg-gray-100 hover:bg-fitgreen hover:text-white px-3 py-1 rounded-full text-sm transition-colors"
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-fitblue/10">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-6">Have Questions About Your Fitness Journey?</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Our expert trainers are ready to help you achieve your fitness goals. Schedule a free consultation today.
          </p>
          <Link to="/free-trial">
            <Button className="btn-primary">
              Book a Free Consultation
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
};

export default BlogPage;
