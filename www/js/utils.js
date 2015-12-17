utils = {
  fetchRemoteSlipways: function(callback) {

    var firebaseSlipwayArray = new Firebase(
      'https://crackling-inferno-1794.firebaseio.com/'
    );
    firebaseSlipwayArray.on('value', function(snapshot) {
      return callback(snapshot.val());
    });

  },
  transformSlipways: function(remoteSlipways) {
    localSlipwayObj = {};
    var slipwayKey;
    for (slipwayKey in remoteSlipways) {
      if (remoteSlipways.hasOwnProperty(slipwayKey)) {
        localSlipwayObj[slipwayKey] = utils.transformSlipway(remoteSlipways[slipwayKey]);
      }
    }
    return localSlipwayObj;
  },
  transformSlipway: function(slipwayArray) {
    if (typeof slipwayArray[2] === 'number') {
      slipwayArray[2] = slipwayArray[2].toString();
    }

    if (typeof slipwayArray[3] === 'number') {
      slipwayArray[3] = slipwayArray[3].toString();
    }

    return {
      idKey:                slipwayArray[0] || Math.random().toString(),
      Name:                 slipwayArray[1],
      'longitude':          slipwayArray[2],
      'latitude':           slipwayArray[3],
      'NearestPlace':       slipwayArray[4],
      'Country':            slipwayArray[5],
      'Region':             slipwayArray[6],
      'Website':            slipwayArray[7],
      'PersonName':         slipwayArray[8],
      'PhoneNumber':        slipwayArray[9],
      'MobilePhoneNumber':  slipwayArray[10],
      'FaxNumber':          slipwayArray[11],
      'Email':              slipwayArray[12],
      'RampDescription':    slipwayArray[13],
      'Directions':         slipwayArray[14],
      'RampType':           slipwayArray[15],
      'UpperArea':          slipwayArray[16],
      'LowerArea':          slipwayArray[17],
      'Suitability':        slipwayArray[18],
      'RampLength':         slipwayArray[19],
      'Facilities':         slipwayArray[20],
      'Charges':            slipwayArray[21],
      'CruisingArea':       slipwayArray[22],
      'NavigationalHazards':slipwayArray[23],
      'images':             slipwayArray[24]
    };
  },
  showSlipwayDetails: function(DbObj) {
    key = document.getElementById("key").innerHTML;
    Name                = "";
    Website             = "";
    PersonName          = "";
    PhoneNumber         = "";
    MobilePhoneNumber   = "";
    Email               = "";
    latitude            = "";
    longitude           = "";
    RampDescription     = "";
    RampType            = "";
    Suitability         = "";
    RampLength          = "";
    Facilities          = "";
    NavigationalHazards = "";
    UpperArea           = "";
    LowerArea           = "";
    Charges             = "";

   if (typeof localSlipwayObj[key].Name !== "undefined"){
     Name = localSlipwayObj[key].Name;
   }
   if (typeof localSlipwayObj[key].Website !== "undefined"){
     Website = localSlipwayObj[key].Website;
   }
   if (typeof localSlipwayObj[key].PersonName !== "undefined"){
     PersonName = localSlipwayObj[key].PersonName;
   }
   if (typeof localSlipwayObj[key].PhoneNumber !== "undefined"){
     PhoneNumber = localSlipwayObj[key].PhoneNumber;
   }
   if (typeof localSlipwayObj[key].MobilePhoneNumber !== "undefined"){
     MobilePhoneNumber = localSlipwayObj[key].MobilePhoneNumber;
   }
   if (typeof localSlipwayObj[key].Email !== "undefined"){
     Email = localSlipwayObj[key].Email;
   }
   if (typeof localSlipwayObj[key].latitude !== "undefined"){
     Latitude = localSlipwayObj[key].latitude;
   }
   if (typeof localSlipwayObj[key].longitude !== "undefined"){
     Longitude = localSlipwayObj[key].longitude;
   }
   if (typeof localSlipwayObj[key].RampDescription !== "undefined"){
     RampDescription = localSlipwayObj[key].RampDescription;
   }
   if (typeof localSlipwayObj[key].RampType !== "undefined"){
     RampType = localSlipwayObj[key].RampType;
   }
   if (typeof localSlipwayObj[key].Suitability !== "undefined"){
     Suitability = localSlipwayObj[key].Suitability;
   }
   if (typeof localSlipwayObj[key].RampLength !== "undefined"){
     RampLength = localSlipwayObj[key].RampLength;
   }
   if (typeof localSlipwayObj[key].Facilities !== "undefined"){
     Facilities = localSlipwayObj[key].Facilities;
   }
   if (typeof localSlipwayObj[key].NavigationalHazards !== "undefined"){
     NavigationalHazards = localSlipwayObj[key].NavigationalHazards;
   }
   if (typeof localSlipwayObj[key].UpperArea !== "undefined"){
     UpperArea = localSlipwayObj[key].UpperArea;
   }
   if (typeof localSlipwayObj[key].LowerArea !== "undefined"){
     LowerArea = localSlipwayObj[key].LowerArea;
   }
   if (typeof localSlipwayObj[key].Charges !== "undefined"){
     Charges = localSlipwayObj[key].Charges;
   }


   document.getElementById("slipwayInfo").innerHTML =
   '<button onclick="utils.showEditSlipwayForm()" type="button">Edit Slipway Details</button>' +
   '<div id=info><br><br>'+
     '<h2>'+
                                       Name                +'<br>'+
     '</h2>'+
     '<h3>'+
     'Contact Details '                                    +'<br>'+
     '</h3>'+
     '<b>Website:</b> '              + Website             +'<br><br>'+
     '<b>Contact Name:</b> '         + PersonName          +'<br><br>'+
     '<b>Contact Phone:</b> '        + PhoneNumber         +'<br><br>'+
     '<b>Contact Mobile:</b> '       + MobilePhoneNumber   +'<br><br>'+
     '<b>Email:</b> '                + Email               +'<br><br>'+
     '<h3>'+
     'Slipway Details '                                    +'<br>'+
     '</h3>'+
     '<b>Latitude:</b> '             + Latitude            +'<br><br>'+
     '<b>Longitude:</b> '            + Longitude           +'<br><br>'+
     '<b>Ramp Description:</b> '     + RampDescription     +'<br><br>'+
     '<b>Ramp Type:</b> '            + RampType            +'<br><br>'+
     '<b>Suitable for:</b> '         + Suitability         +'<br><br>'+
     '<b>Ramp Length:</b> '          + RampLength          +'<br><br>'+
     '<b>Facilities:</b> '           + Facilities          +'<br><br>'+
     '<b>Navigational Hazards:</b> ' + NavigationalHazards +'<br><br>'+
     '<b>Upper Area Material:</b> '  + UpperArea           +'<br><br>'+
     '<b>Lower Area Material:</b> '  + LowerArea           +'<br><br>'+
     '<b>Charges:</b> '              + Charges             +'<br><br>'+
   '</div>';
 },
  showEditSlipwayForm: function(){
    document.getElementById("slipwayInfo").innerHTML =
    '<button onclick="utils.submitSlipwayDetails()" type="button">Submit Slipway Details</button>' +
    '<div id=info><br><br>'+
      '<h4>'+
      '<b>Name:</b> '                 +'<input type="text" id="Name" value="'             +Name+               '"><br><br>'+
      '</h4>'+
      '<h3>'+
      'Contact Details '                     +'<br>'+
      '</h3>'+
      '<b>Website:</b> '              +'<input type="text" id="Website" value="'          +Website+            '"><br><br>'+
      '<b>Contact Name:</b> '         +'<input type="text" id="PersonName" value="'       +PersonName+         '"><br><br>'+
      '<b>Contact Phone:</b> '        +'<input type="text" id="PhoneNumber" value="'      +PhoneNumber+        '"><br><br>'+
      '<b>Contact Mobile:</b> '       +'<input type="text" id="MobilePhoneNumber" value="'+MobilePhoneNumber+  '"><br><br>'+
      '<b>Email:</b> '                +'<input type="text" id="Email" value="'            +Email+              '"><br><br>'+
      '<h3>'+
      'Slipway Details '                     +'<br>'+
      '</h3>'+
      '<b>Ramp Description:</b> '     +'<input type="text" id="RampDescription" value="'  +RampDescription+    '"><br><br>'+
      '<b>Ramp Type:</b> '            +'<input type="text" id="RampType" value="'         +RampType+           '"><br><br>'+
      '<b>Suitable for:</b> '         +'<select id="Suitability">'+
                                          '<option value="Unknown">Unknown</option>'+
                                          '<option value="Portable Only">Portable Only</option>'+
                                          '<option value="Small trailer can be pushed">Small trailer can be pushed</option>'+
                                          '<option value="Large trailer needs a car">Large trailer needs a car</option>'+
                                       '</select>'+                                                              '><br><br>'+
      '<b>Ramp Length:</b> '          +'<select id="RampLength">'+
                                          '<option value="Unknown">Unknown</option>'+
                                          '<option value="No Ramp">No Ramp</option>'+
                                          '<option value="1/4 tidal">1/4 tidal</option>'+
                                          '<option value="1/2 tidal">1/2 tidal</option>'+
                                          '<option value="3/4 tidal">3/4 tidal</option>'+
                                          '<option value="Whole of tidal range">Whole of tidal range</option>'+
                                          '<option value="1/4 tidal">1/4 tidal</option>'+
                                          '<option value="Non-tidal">Non-tidal</option>'+
                                        '</select>'+                                                              '><br><br>'+
      '<b>Facilities:</b> '           +'<input type="text" id="Facilities" value="'         +Facilities+         '"><br><br>'+
      '<b>Navigational Hazards:</b> ' +'<input type="text" id="NavigationalHazards" value="'+NavigationalHazards+'"><br><br>'+
      '<b>Upper Area Material:</b> '  +'<select id="UpperAreaMaterial">'+
                                          '<option value="Unknown">Unknown</option>'+
                                          '<option value="Sand">Sand</option>'+
                                          '<option value="Shingle">Shingle</option>'+
                                          '<option value="Rock">Rock</option>'+
                                          '<option value="Harbour">Harbour</option>'+
                                          '<option value="Concrete">Concrete</option>'+
                                       '</select>'+                                                               '><br><br>'+
      '<b>Lower Area Material:</b> '  +'<select id="LowerAreaMaterial">'+
                                          '<option value="Unknown">Unknown</option>'+
                                          '<option value="Sand">Sand</option>'+
                                          '<option value="Shingle">Shingle</option>'+
                                          '<option value="Rock">Rock</option>'+
                                          '<option value="Harbour">Harbour</option>'+
                                          '<option value="Concrete">Concrete</option>'+
                                       '</select>'+                                                               '><br><br>'+
      '<b>Charges:</b> '              +'<input type="text" id="Charges" value="'            +Charges+            '"><br><br>'+
    '</div>';
  },
   showNewSlipwayForm: function(){
    document.getElementById("slipwayInfo").innerHTML =

    '<form>'+
    '<button onclick="utils.submitNewSlipwayDetails()" type="button">Submit Slipway Details</button>' +
    '<div id=info><br><br>'+
      '<h4>'+
      '<b>Name:</b> '                 +'<input type="text" id="Name"                                           ><br><br>'+
      '</h4>'+
      '<b>Longitude:</b> '            +'<input type="Longitude" id="Longitude">                                 <br><br>'+
      '<b>Latitude:</b> '             +'<input type="Latitude" id="Latitude">                                   <br><br>'+

      '<h3>'+
      'Contact Details '                     +'<br>'+
      '</h3>'+
      '<b>Website:</b> '              +'<input type="text" id="Website"                                          ><br><br>'+
      '<b>Contact Name:</b> '         +'<input type="text" id="PersonName"                                       ><br><br>'+
      '<b>Contact Phone:</b> '        +'<input type="text" id="PhoneNumber"                                      ><br><br>'+
      '<b>Contact Mobile:</b> '       +'<input type="text" id="MobilePhoneNumber"                                ><br><br>'+
      '<b>Email:</b> '                +'<input type="text" id="Email"                                            ><br><br>'+
      '<h3>'+
      'Slipway Details '                     +'<br>'+
      '</h3>'+
      '<b>Ramp Description:</b> '     +'<input type="text" id="RampDescription"                                  ><br><br>'+
      '<b>Ramp Type:</b> '            +'<input type="text" id="RampType"                                         ><br><br>'+
      '<b>Suitable for:</b> '         +'<select id ="Suitability">'+
                                          '<option value="Unknown">Unknown</option>'+
                                          '<option value="Portable Only">Portable Only</option>'+
                                          '<option value="Small trailer can be pushed">Small trailer can be pushed</option>'+
                                          '<option value="Large trailer needs a car">Large trailer needs a car</option>'+
                                       '</select>'+                                                               '><br><br>'+
      '<b>Ramp Length:</b> '          +'<select id="RampLength">'+
                                          '<option value="Unknown">Unknown</option>'+
                                          '<option value="No Ramp">No Ramp</option>'+
                                          '<option value="1/4 tidal">1/4 tidal</option>'+
                                          '<option value="1/2 tidal">1/2 tidal</option>'+
                                          '<option value="3/4 tidal">3/4 tidal</option>'+
                                          '<option value="Whole of tidal range">Whole of tidal range</option>'+
                                          '<option value="1/4 tidal">1/4 tidal</option>'+
                                          '<option value="Non-tidal">Non-tidal</option>'+
                                        '</select>'+                                                              '><br><br>'+
      '<b>Facilities:</b> '           +'<input type="text" id="Facilities" ><br><br>'+
      '<b>Navigational Hazards:</b> ' +'<input type="text" id="NavigationalHazards"                              ><br><br>'+
      '<b>Upper Area Material:</b> '  +'<select id="UpperAreaMaterial">'+
                                          '<option value="Unknown">Unknown</option>'+
                                          '<option value="Sand">Sand</option>'+
                                          '<option value="Shingle">Shingle</option>'+
                                          '<option value="Rock">Rock</option>'+
                                          '<option value="Harbour">Harbour</option>'+
                                          '<option value="Concrete">Concrete</option>'+
                                       '</select>'+                                                               '><br><br>'+
      '<b>Lower Area Material:</b> '  +'<select id="LowerAreaMaterial">'+
                                          '<option value="Unknown">Unknown</option>'+
                                          '<option value="Sand">Sand</option>'+
                                          '<option value="Shingle">Shingle</option>'+
                                          '<option value="Rock">Rock</option>'+
                                          '<option value="Harbour">Harbour</option>'+
                                          '<option value="Concrete">Concrete</option>'+
                                       '</select>'+                                                               '><br><br>'+
      '<b>Charges:</b>'               +'<input type="text" id="Charges"                                          ><br><br>'+
    '</div>'+
    '</form>';
  },
  submitNewSlipwayDetails: function(map) {
    var idKey = Date.now();
    var keyRoute = new Firebase('https://crackling-inferno-1794.firebaseio.com/' + idKey);
    var nameInput = document.getElementById('Name').value,
        longInput = document.getElementById('Longitude').value,
        latInput = document.getElementById('Latitude').value,
        websiteInput = document.getElementById('Website').value,
        personInput = document.getElementById('PersonName').value,
        phoneNumberInput = document.getElementById('PhoneNumber').value,
        mobilePhoneInput = document.getElementById('MobilePhoneNumber').value,
        emailInput = document.getElementById('Email').value,
        rampDescInput = document.getElementById('RampDescription').value,
        rampTypeInput = document.getElementById('RampType').value,
        suitabilityInput = document.getElementById('Suitability').value, // select
        rampLengthInput = document.getElementById('RampLength').value, // select
        facilitiesInput = document.getElementById('Facilities').value,
        navHazInput = document.getElementById('NavigationalHazards').value,
        upperAreaMaterialInput = document.getElementById('UpperAreaMaterial').value, // select
        lowerAreaMaterialInput = document.getElementById('LowerAreaMaterial').value, //select
        chargesInput = document.getElementById('Charges').value;


    var slipwayInfo = document.getElementById("slipwayInfo");

    var onComplete = function(error) {
        if (error) {

            alert('Failure, unfortunately there was an error');
        } else {
            slipwayInfo.innerHTML ='';
            slipwayInfo.innerHTML = '<div><h3>Success! your slipway has been added to the datbase</h3></div>';

            console.log('Success, your slipway has been added to the database');
        }
    };

     keyRoute.set([
       // empty array elements are necessary for Database format
        idKey,
        nameInput,
        longInput,
        latInput,
                , // Nearest place
                , // Country
                , // Region
        websiteInput,
        personInput,
        phoneNumberInput,
        mobilePhoneInput,
                  , // Fax
        emailInput,
        rampDescInput,
                    , // Directions
        rampTypeInput,
        upperAreaMaterialInput,
        lowerAreaMaterialInput,
        suitabilityInput,
        rampLengthInput,
        facilitiesInput,
        chargesInput,
                    , // CruisingArea
        navHazInput,
                      // Images
    ], onComplete);

  },
  submitSlipwayDetails: function(map) {

    var idKey = key;
    var keyRoute = new Firebase('https://crackling-inferno-1794.firebaseio.com/' + idKey);
    var nameInput = document.getElementById('Name').value,
        websiteInput = document.getElementById('Website').value,
        personInput = document.getElementById('PersonName').value,
        phoneNumberInput = document.getElementById('PhoneNumber').value,
        mobilePhoneInput = document.getElementById('MobilePhoneNumber').value,
        emailInput = document.getElementById('Email').value,
        rampDescInput = document.getElementById('RampDescription').value,
        rampTypeInput = document.getElementById('RampType').value,
        suitabilityInput = document.getElementById('Suitability').value, // select
        rampLengthInput = document.getElementById('RampLength').value, // select
        facilitiesInput = document.getElementById('Facilities').value,
        navHazInput = document.getElementById('NavigationalHazards').value,
        upperAreaMaterialInput = document.getElementById('UpperAreaMaterial').value, // select
        lowerAreaMaterialInput = document.getElementById('LowerAreaMaterial').value, //select
        chargesInput = document.getElementById('Charges').value;



    var onComplete = function(error) {
        if (error) {

            alert('Failure, unfortunately there was an error');
        } else {
            slipwayInfo.innerHTML ='';
            slipwayInfo.innerHTML = '<div> <h3>Success! your slipway has been added to the datbase</h3></div>';

            console.log('Success, your slipway has been added to the database');
        }
    };


    keyRoute.set([
       // empty array elements are necessary for Database format
        idKey,
        nameInput,
        localSlipwayObj[key].longitude,
        localSlipwayObj[key].latitude,
                , // Nearest place
                , // Country
                , // Region
        websiteInput,
        personInput,
        phoneNumberInput,
        mobilePhoneInput,
                  , // Fax
        emailInput,
        rampDescInput,
                    , // Directions
        rampTypeInput,
        upperAreaMaterialInput,
        lowerAreaMaterialInput,
        suitabilityInput,
        rampLengthInput,
        facilitiesInput,
        chargesInput,
                    , // CruisingArea
        navHazInput,
                      // Images
    ],onComplete);
  },
  setupInitialLocation: function(map) {
    if (navigator.geolocation) {
      browserSupportFlag = true;
      navigator.geolocation.getCurrentPosition(function(position) {
        initialLocation = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
        map.setCenter(initialLocation);
      }, function() {
        initialLocation = new google.maps.LatLng(51.508742, -0.120850);
      });
    } else {
      initialLocation = new google.maps.LatLng(51.508742, -0.120850);
    }
  },




  renderInfoContent: function(data, key) {

    return '<div id="name">' +
      '<h3>' + data[key].Name + '</h3>' +
      '</div>' +
      '<p hidden id="key">'+key+'</p hidden>'+

      '<button onclick="utils.showSlipwayDetails()" type="button">More Info</button>' +
      '</div>';
  }

};
