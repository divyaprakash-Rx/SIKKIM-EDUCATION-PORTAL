import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-ssignup',
  templateUrl: './ssignup.component.html',
  styleUrls: ['./ssignup.component.css'
  ]
})
export class SsignupComponent implements OnInit {
  signup: NgForm;
  genders = ['Male', 'Female'];
  studentdata = {
    sfname:'',
    slname:'',
    smfname:'',
    smlname:'',
    sffname:'',
    sflname: '',
    semail: '',
    saddr: '',
    ssex: '',
    ssid: '',
    sdob: '',
    sclass: '',
    sccode: '',
    sphone: '',
    saadhar:''
  }
  constructor() { }

  ngOnInit() {
  }
  onSubmit(form: NgForm) {
    console.log(form);
    this.studentdata.sfname = form.value.sfname;
    this.studentdata.slname = form.value.slname;
    this.studentdata.smfname =form.value.smfname;
    this.studentdata.smlname = form.value.smlname;
    this.studentdata.sffname = form.value.sffname;
    this.studentdata.sflname = form.value.sflname;
    this.studentdata.semail = form.value.semail;
    this.studentdata.saddr = form.value.saddr;
    this.studentdata.ssex = form.value.ssex;
    this.studentdata.ssid = form.value.ssid;
    this.studentdata.sdob = form.value.sdob;
    this.studentdata.sclass = form.value.sclass;
    this.studentdata.sccode = form.value.sccode;
    this.studentdata.sphone = form.value.sphone;
    this.studentdata.saadhar = form.value.saadhar;
    alert('Thanks,your request has been recorded!');
  }
}
 
