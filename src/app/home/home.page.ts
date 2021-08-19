import { Component } from '@angular/core';
import { File } from '@ionic-native/file/ngx';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  private promise: Promise<string>;
  private stringToWrite: string;
  private blob: Blob;
  constructor(
  private platform: Platform,
  private file: File,
  ) {
  this.platform.ready().then(() => {
  });
  }
  createFile() {
    console.log("file created");
  this.file.createFile(this.file.dataDirectory, 'filename', true);
  }
  async readFile() {
  this.promise = this.file.readAsText(this.file.dataDirectory, 'filename');
  await this.promise.then(value => {
  console.log(value);
  });
  }
  writeFile() {
  this.stringToWrite = 'I learned this from Medium';
  this.blob = new Blob([this.stringToWrite], { type: 'text/plain' });
  this.file.writeFile(this.file.dataDirectory, 'filename', this.blob, {replace: true, append: false});
  }
}
