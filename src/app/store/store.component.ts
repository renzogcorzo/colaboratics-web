import { Component, OnInit, Renderer2, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.less']
})
export class StoreComponent implements OnInit {

  constructor(
    private _renderer2: Renderer2,
    @Inject(DOCUMENT) private _document: Document
  ) {}
ß
  ngOnInit(): void {
    let storeId = 34565388;
    let script = this._renderer2.createElement("script");
    script.setAttribute("type", "text/javascript");
    script.setAttribute("charset", "utf-8");
    script.setAttribute("data-cfasync", "false");
    script.setAttribute(
      "src",
      `https://app.ecwid.com/script.js?${storeId}&data_platform=code&data_date=2020-02-17`
    );
    script.onload = this.injectEcwidProductBrowser(storeId);

    this._renderer2.appendChild(this._document.body, script);
  }

  private injectEcwidProductBrowser(storeId) {
    return function() {
      const ecwidBrowserScript = document.createElement("script");
      ecwidBrowserScript.setAttribute("type", "text/javascript");
      ecwidBrowserScript.setAttribute("charset", "utf-8");
      ecwidBrowserScript.text = `xProductBrowser("categoriesPerRow=3","views=grid(20,3) list(60) table(60)","categoryView=grid","searchView=list","id=my-store-${storeId}");`;
      document.head.appendChild(ecwidBrowserScript);
    };
  }

}
