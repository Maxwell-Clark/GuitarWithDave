<template>
  <div class="wrapper">
    <div class="marquee">
      <p>
         "Yep! He's a great teacher!" - Glenn

        "Let me skip to the chase...David is awesome." - Samantha

          "David is a fabulous teacher!  I played "around" with the guitar my entire life,
        but never took any formal lessons.  At 50, I decided to learn how to play.
        David has a wonderful teaching methodology.  Anyone can learn if they follow his instruction.
        I went on to form my own band that now plays in public.  Do yourself a favor and don't wait until you are 50!!!" - Brett

        "Dave taught me guitar for the better part of a year and he is without a doubt the most accomplished guitar teacher
        that I have ever had the pleasure of being tutored by. His Street Guitar method covers
        all aspects of playing the guitar in a friendly and approachable environment.
        He uses his knowledge as a highly trained musician to coach you around the fretboard
        in a way that makes sense. Since being tutored by him, my guitar playing skills have exponentially
        improved and I am now in a rock band and having a blast. Thanks, Dave!!" - Aaron
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "marquee"
}
</script>

<style scoped>
.wrapper {
  width: 101%;
  overflow: hidden;
}

.marquee {
  white-space: nowrap;
  overflow: hidden;
  display: inline-block;
  animation: marquee 100s linear infinite;
}

.marquee p {
  display: inline-block;
  font-weight: bold;
  color: #34495e;
}

@keyframes marquee {
  0% {
    transform: translate3d(50%, 0, 0);
  }
  100% {
    transform: translate3d(-100%, 0, 0);
  }
}

</style>
