var macyInstance = Macy({
    container: '.user-feed',
    columns: 3,
    breakAt: {
        720: {
            margin: {
                x: 5,
                y: 5  
              },
            columns: 2
        },
        576: {
            margin: {
                x: 5,
                y: 5  
              },
            columns: 1
        }
    },
    waitForImages: true,
    margin: {
        x: 6,
        y: 6  
      }
  });
