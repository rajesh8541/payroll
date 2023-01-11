import { Component } from '@angular/core';
import { FormGroup, FormControl, FormArray } from '@angular/forms';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'payroll';
  parent_data= {
    name:'softobotics',
    emp:'001'
  }
  form!: FormGroup;
  toggle = true;
  data: Array<any> = [];
  arrayControl: any;

  ngOnInit() {
    this.form = new FormGroup({
      allowance: new FormArray([
        new FormGroup({name: new FormControl('')
        })]),
      deduction: new FormArray([
        new FormGroup({name: new FormControl('')
        })])
    });
  }

  get allowance(): FormArray {
    return this.form.get('allowance') as FormArray;
  }
  get deduction(): FormArray {
    return this.form.get('deduction') as FormArray;
  }

  addInput() {
      this.data = []
      this.allowance.push(new FormGroup({
      name: new FormControl('')}));
      this.allowance.value.map((ele: any) => {
      this.data.push(ele)
    })
  }
  removeText(index: any) {
      this.allowance.removeAt(index);
  }
  disableMethod(index: number)
  {
    this.toggle = !this.toggle;
    if (this.toggle)
    {
        this.arrayControl = this.form.get('allowance') as FormArray ;
        this.arrayControl.at(index).disable()
    }
      else
      { this.arrayControl = this.form.get('allowance') as FormArray ;
        this.arrayControl.at(index).enable();
    }
  }
  drop(event: CdkDragDrop<Event>) {
      moveItemInArray(this.data, event.previousIndex, event.currentIndex);
      this.allowance.clear();
      for (let i = 0; i < this.data.length; i++) {
        this.allowance.push(new FormGroup({
        name: new FormControl(this.data[i].name)
      })
      );
    }
  }
}
