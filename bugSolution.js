```javascript
// Correctly defined colors in your tailwind.config.js file
module.exports = {
  theme: {
    extend: {
      colors: {
        'purple-500': '#8840B2',
      }
    }
  }
}

<div class="bg-gradient-to-r from-blue-500 to-purple-500">
  <!-- Content -->
</div>
```