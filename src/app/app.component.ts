import { Component } from '@angular/core';
import { ColDef } from 'ag-grid-community';
import { getData } from './finance-example/data';

import { FinanceExample } from './finance-example/finance-example.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FinanceExample],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'ag-grid-finance-example-angular';

  rowData = getData().map((item, index) => ({
    ...item,
    ordinaryNumber: index + 1,
  }));

  colDefs: ColDef[] = [
    {
      headerName: 'Ред. бр.',
      field: 'ordinaryNumber',
      cellRenderer: 'text',
      pinned: 'left',
      maxWidth: 85,
      filter: false,
      editable: false
    },
    {
      headerName: 'Компетенции',
      field: 'competencies',
      cellDataType: 'text',
    },
    {
      headerName: 'Активности',
      field: 'activities',
      cellDataType: 'text',
    },
    {
      headerName: 'Ресурси',
      field: 'resources',
      cellDataType: 'text',
    },
    {
      headerName: 'Време на реализација',
      field: 'timeOfRealization',
      cellDataType: 'text',
    },
    {
      headerName: 'Очекувани исходи',
      field: 'expectedOutcomes',
      cellDataType: 'text',
    },
    {
      headerName: 'Забелешки',
      field: 'notes',
      cellDataType: 'text',
    },
  ];
}
