import React, { useEffect, useLayoutEffect } from 'react'

// useEffect runs after the render is committed to the screen.

// useLayoutEffect runs synchronously after render but before paint — blocking the browser until it finishes.

// 👉 Use useEffect for:

// API calls

// Event listeners

// Side-effects not affecting layout

// 👉 Use useLayoutEffect for:

// Measuring DOM dimensions

// Mutating the DOM before painting (e.g., animations)

function useEffectUseLayoutEffect() {

    useEffect(() => {
        console.log('this is useeffect');
    }, []);

    useLayoutEffect(() => {
        console.log('this is uselayouteffect');
    }, []);

  return (
    <div></div>
  )
}

export default useEffectUseLayoutEffect;