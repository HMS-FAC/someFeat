/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        navigator.splashscreen.hide();
        app.receivedEvent('deviceready');
        window.onerror = function(err) {
          document.getElementById('myerror').innerHTML = err.toString();
        };
      function createMapWithSlipways(slipways) {

           markers = [];
           var mapProp = {
               zoom: 6,
               mapTypeId: google.maps.MapTypeId.ROADMAP
           };

           var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);

           utils.setupInitialLocation(map);

           var infowindow = null;

           Object.keys(slipways).forEach(function(key) {
               var marker = new google.maps.Marker({
                   position: new google.maps.LatLng(Number(slipways[key].latitude), Number(slipways[key].longitude)),
                   __filtervalue: {Suitability: slipways[key].Suitability}
               });

               if (slipways[key].Suitability === 'Unknown') {
                 marker.setIcon('http://maps.google.com/mapfiles/ms/icons/yellow-dot.png');
               } else if (slipways[key].Suitability === 'Small trailer can be pushed') {

                marker.setIcon('http://maps.google.com/mapfiles/ms/icons/red-dot.png');
               }
                   markers.push(marker);
                   marker.setMap(map);
                   marker.addListener('click', function() {
                     if (infowindow) {
                       infowindow.close();
                     }

                     infowindow = new google.maps.InfoWindow({
                       content : utils.renderInfoContent(slipways, key)
                     });

                     infowindow.open(map, marker);

                   });

               });

               mc = new MarkerClusterer(map, markers);
              //  mc.setIgnoreHidden(true);


           var input = document.getElementById('pac-input');
           var searchBox = new google.maps.places.SearchBox(input);

           map.controls[google.maps.ControlPosition.TOP_RIGHT].push(input);

           map.addListener('bounds_changed', function() {
               searchBox.setBounds(map.getBounds());
           });

           searchBox.addListener('places_changed', function() {
               console.log("places_changed");
               var places = searchBox.getPlaces();

               if (places.length === 0) {
                   return;
               }

               markers.forEach(function(marker) {
                   marker.setMap(null);
               });
               markers = [];

               //  https://developers.google.com/maps/documentation/javascript/examples/places-autocomplete
               map.setCenter(places[0].geometry.location);

               var bounds = new google.maps.LatLngBounds();
               places.forEach(function(place) {
                   var icon = {
                       url: place.icon,
                       size: new google.maps.Size(71, 71),
                       origin: new google.maps.Point(0, 0),
                       anchor: new google.maps.Point(17, 34),
                       scaledSize: new google.maps.Size(25, 25)
                   };

                   markers.push(new google.maps.Marker({
                       map: map,
                       icon: icon,
                       title: place.name,
                       position: place.geometry.location
                   }));
               });
               //map.fitBounds(bounds);
             });
       }

      utils.fetchRemoteSlipways(function(remoteSlipways){
        var slipways = utils.transformSlipways(remoteSlipways);

        createMapWithSlipways(slipways);

      });


//----------------------------------------------------------------------------
//all funcitons above this line

    },


    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};
