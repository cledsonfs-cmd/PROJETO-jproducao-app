import { Component, AfterViewInit } from '@angular/core';

import * as $ from 'jquery'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit{
  title = 'jproducao-app';

  ngAfterViewInit(){
    (function($) {
      "use strict";
    
      // Add active state to sidbar nav links
      var path = window.location.href; // because the 'href' property of the DOM element is the absolute path
          $("#layoutSidenav_nav .sb-sidenav a.nav-link").each(function() {
            var href = $(this).attr('href');
              if (href === path) {
                  $(this).addClass("active");
              }
          });
    
      // Toggle the side navigation
      $("#sidebarToggle").on("click", function(e) {
          e.preventDefault();
          $("body").toggleClass("sb-sidenav-toggled");
      });
    })(jQuery);
  }
}
