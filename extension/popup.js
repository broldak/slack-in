// Copyright (c) 2012 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.


function click(e) {
  
  window.close();
}

document.addEventListener('DOMContentLoaded', function () {
  var name,
  	  message;

  $('#btn').click(function(){
  	name = $('#name').val();
  	message = $('#message').val();

  	console.log(name, message);
  });
});