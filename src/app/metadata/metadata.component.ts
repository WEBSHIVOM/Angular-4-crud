import { Component, OnInit } from '@angular/core';
import {SelectItem} from 'primeng/primeng';
import { document } from '../models/metadataModel';
import { ActivatedRoute,Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
import { UserService } from '../services/user.service';
import { AlertService} from '../services/alert.service';
import {Message} from 'primeng/primeng';
import { FileUploadComponent } from '../fileupload/fileupload.component';
import {MetadataService} from '../services/metadata.service'
import { Http } from '@angular/http';
import { UserNew } from '../models/UserNew';
@Component({
  selector: 'app-metadata',
  templateUrl: './metadata.component.html',
  styleUrls: ['./metadata.component.css'],
  entryComponents:[FileUploadComponent]
})
export class MetadataComponent implements OnInit {
 author: SelectItem[];
 role: SelectItem[];
 selectedrole: string;
selectedauthor: string;
 //doc :document = new document();
 doc:any={};
 loading = false;
 msgs: Message[] = [];
  returnUrl: string;
  cols:any={};
  rols:any={};
  dated:Date;
  minDate:Date;
  maxDate:Date;
  invalidDates: Array<Date>;
  uploadedFiles: any[] = [];
  constructor(private http: Http, private alertService: AlertService, private router: Router,private userService: UserService) {



  }

  ngOnInit() {

    debugger;
this.getroles();
this.getdata();

    //this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';


  }
  setdate(event){
    debugger;

  }
getdata(){
  this.userService.getAuthors().then((res) => {
       debugger;
       this.author = [];
        this.author.push({label:'Select Author', value:null});
this.cols=res;
for(let i = 0 ; i < this.cols.length; i++)
 {
         this.author.push({label: this.cols[i].FirstName, value:this.cols[i].FirstName});
 }
    }, (err) => {
      console.log(err);
    });

}
getroles(){
  this.userService.getroles().then((res) => {
       debugger;
       this.role = [];
        this.role.push({label:'Select Roles', value:null});
this.rols=res;
for(let i = 0 ; i < this.rols.length; i++)
 {
         this.role.push({label: this.rols[i].Name, value:this.rols[i].Name});
 }
    }, (err) => {
      console.log(err);
    });

}
saveMetadata(event){

this.loading = true;
let formData = new FormData();
               for(let file of event.currentTarget.elements.Docx.files)
                    {
                   formData.append('file[]',file);
                    }
      formData.append('Name',this.doc.Name);
      formData.append('Id',this.doc.Id);
      formData.append('AuthorId',"1");
      formData.append('CreatedOn',new Date(this.doc.CreatedOn).toLocaleString());
       formData.append('Description',this.doc.Description);
       formData.append('UpdatedOn',new Date(this.doc.UpdatedOn).toLocaleString());
       formData.append('PublishedOn',new Date(this.doc.PublishedOn).toLocaleString());

      this.userService.saveMetadata(formData).then((res) => {
        debugger;
  this.msgs.push({severity: 'success', summary: 'Uploaded', detail:'Metadata'});
this.router.navigate(['/GetAllMetadata']);
} , (err) => {
      console.log(err);
    });


//console.log(fd.get('doc'))
}
onchange(event) {
debugger;
        for(let file of event.files) {
          this.msgs = [];
      for (let i = 0; i < event.files.length; i++){
                      this.msgs.push({severity: 'info', summary: 'Uploaded', detail:event.files[i].name+'files'});

                 }
            this.uploadedFiles.push(file);

        }


    }

}
