import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReferenceService {

  district = [
    "",
    "Ariyalur",
    "Chengalpattu",
    "Chennai",
    "Coimbatore",
    "Cuddalore",
    "Dharmapuri",
    "Dindigul",
    "Erode",
    "Kallakurichi",
    "Kanchipuram",
    "Kanyakumari",
    "Karur",
    "Krishnagiri",
    "Madurai",
    "Nagapattinam",
    "Namakkal",
    "Nilgiris",
    "Perambalur",
    "Pudukkottai",
    "Ramanathapuram",
    "Ranipet",
    "Salem",
    "Sivaganga",
    "Tenkasi",
    "Thanjavur",
    "Theni",
    "Thoothukudi (Tuticorin)",
    "Tiruchirappalli",
    "Tirunelveli",
    "Tirupathur",
    "Tiruppur",
    "Tiruvallur",
    "Tiruvannamalai",
    "Tiruvarur",
    "Vellore",
    "Viluppuram",
    "Virudhunagar"
  ]
  travels: any = [
    {
      data:{type: "all_bus", source: "Chennai", destination: "Madurai", travelname: "Praven Travels", duration: "08:20 PM to 03:00 AM 6 Hr : 40 Mins",  price: 400
      }
    },
    {
      data:{type: "all_bus",source: "Chennai", destination: "Madurai", travelname: "SRM", duration: "08:20 PM to 03:00 AM 6 Hr : 40 Mins", rating: 3.3, price: 400
      }
    },
    {
      data:{type: "all_bus", source: "Chennai", destination: "Erode", travelname: "Praven Travels", duration: "08:20 PM to 03:00 AM 6 Hr : 40 Mins",  price: 400
      }
    },
    {
      data:{type: "all_bus",source: "Chennai", destination: "Karur", travelname: "Praven Travels", duration: "08:20 PM to 03:00 AM 6 Hr : 40 Mins",  price: 400
      }
    },
    {
      data:{type: "all_bus",source: "Chennai", destination: "Theni", travelname: "Praven Travels", duration: "08:20 PM to 03:00 AM 6 Hr : 40 Mins",  price: 400
      }
    },
  ];

  constructor() { }
}
