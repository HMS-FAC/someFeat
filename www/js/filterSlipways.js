function filterSlipways(){
  document.getElementById("deviceready").innerHTML='filter';
    //show unknown slipways too
    if(document.getElementById('unknown-slipways').checked) {
      //every slipway
      if(document.getElementById('portable').checked) {
        markers.forEach(function(e) {
            e.setVisible(true);
        });
        mc.repaint();
        }
      // small, large and unknown
      if(document.getElementById('small').checked) {
        markers.forEach(function(e) {
          e.setVisible(true);
          if(e.__filtervalue.Suitability !== 'Small trailer can be pushed' &&
            e.__filtervalue.Suitability !== 'Large trailer needs a car' &&
            e.__filtervalue.Suitability !== 'Unknown'){
              e.setVisible(false);
          }
        });
        mc.repaint();
      }
      //large and unknown
      if(document.getElementById('large').checked) {
        markers.forEach(function(e) {
          e.setVisible(true);
          if(e.__filtervalue.Suitability !== 'Large trailer needs a car' &&
            e.__filtervalue.Suitability !== 'Unknown'){
              e.setVisible(false);
          }
        });
        mc.repaint();
      }
    }
    //doesn't show unknown slipways
    else {
      //every slipway except unknown
      if(document.getElementById('portable').checked) {
        markers.forEach(function(e) {
          e.setVisible(true);
          if(e.__filtervalue.Suitability === 'Unknown') {
            e.setVisible(false);
          }
        });
        mc.repaint();
        }
      //only small and large
      if(document.getElementById('small').checked) {
        markers.forEach(function(e) {
          e.setVisible(true);
          if(e.__filtervalue.Suitability !== 'Small trailer can be pushed' &&
            e.__filtervalue.Suitability !== 'Large trailer needs a car'){
              e.setVisible(false);
          }
        });
        mc.repaint();
      }
      //only large
      if(document.getElementById('large').checked) {
        markers.forEach(function(e) {
          e.setVisible(true);
          if(e.__filtervalue.Suitability !== 'Large trailer needs a car') {
            e.setVisible(false);
          }
        });
        mc.repaint();
      }
    }

  }
