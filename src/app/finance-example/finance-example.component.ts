import { Component, Input, ViewEncapsulation } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';

import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-quartz.css';

import { AllCommunityModule, ClientSideRowModelModule, type ColDef, type GetRowIdFunc, type GetRowIdParams, type GridOptions, ModuleRegistry } from 'ag-grid-community';

ModuleRegistry.registerModules([
  AllCommunityModule,
  ClientSideRowModelModule
]);

@Component({
  selector: 'finance-example',
  standalone: true,
  imports: [AgGridAngular],
  templateUrl: './finance-example.component.html',
  styleUrl: './finance-example.component.css',
  encapsulation: ViewEncapsulation.None
})
export class FinanceExample {
  @Input() gridTheme: string = 'ag-theme-quartz';
  @Input() isDarkMode: boolean = false;
  @Input() colDefs: ColDef[] = [];
  @Input() rowData: any;

  themeClass = `${this.gridTheme}${this.isDarkMode ? '-dark' : ''}`;
  theme: GridOptions['theme'] = 'legacy';

  getRowId: GetRowIdFunc = (params: GetRowIdParams) => params.data.ticker;

  rowGroupPanelShow: 'always' | 'onlyWhenGrouping' | 'never' | undefined = 'always';

  defaultColDef: ColDef = {
    flex: 1,
    enableValue: true,
    minWidth: 100,
    initialWidth: 100,
    editable: true,
    sortable: false
  };
}
