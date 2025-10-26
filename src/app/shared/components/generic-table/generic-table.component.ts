import { CommonModule } from '@angular/common';
import { Component, ElementRef, EventEmitter, Input, OnInit, Output, TemplateRef, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
import { MultiSelectModule } from 'primeng/multiselect';
import { ProgressBarModule } from 'primeng/progressbar';
import { RatingModule } from 'primeng/rating';
import { RippleModule } from 'primeng/ripple';
import { SelectModule } from 'primeng/select';
import { SliderModule } from 'primeng/slider';
import { Table, TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { ToastModule } from 'primeng/toast';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { TooltipModule } from 'primeng/tooltip';
import { ColumnDef } from '../../models/column-def.model';
import { ToolbarModule } from 'primeng/toolbar';

interface ItemWithId {
  id: string | number;
  [key: string]: any;
}

@Component({
  selector: 'app-generic-table',
  standalone: true,
  imports: [
    TableModule,
    MultiSelectModule,
    SelectModule,
    InputIconModule,
    TagModule,
    InputTextModule,
    SliderModule,
    ProgressBarModule,
    ToggleButtonModule,
    ToastModule,
    CommonModule,
    FormsModule,
    ButtonModule,
    RatingModule,
    RippleModule,
    IconFieldModule,
    ToolbarModule,
    TooltipModule
  ],
  templateUrl: './generic-table.component.html',
  styleUrls: ['./generic-table.component.scss']
})
export class GenericTableComponent<T> implements OnInit {
  @Input() data: ItemWithId[] = [];
  @Input() rows: number = 10;
  @Input() loading: boolean = false;
  @Input() columns: ColumnDef[] = [];
  @Input() isPaginator: boolean = true;
  @Input() rowsPerPageOptions: number[] = [5, 10, 20, 50];
  @Input() dataKey = 'id';
  @Input() title = '';
  @Input() isToolbar = true;

  @Output() onAddClick = new EventEmitter<void>();
  @Output() onEditClick = new EventEmitter<any>();
  @Output() onDeleteClick = new EventEmitter<any>();
  @Output() onViewClick = new EventEmitter<any>();
  @Output() onExportClick = new EventEmitter<void>();
  @Output() onRefreshClick = new EventEmitter<void>();
  @Output() onBulkDeleteClick = new EventEmitter<any[]>();

  selectedRows: any[] = [];
  filterValue: string = '';
  globalFilterFields: string[] = [];

  ngOnInit() {
    this.globalFilterFields = this.columns.map((col) => col.field);
  }

  clear(table: any) {
    table.clear();
    this.filterValue = '';
  }

  onGlobalFilter(table: any, event: Event) {
    const value = (event.target as HTMLInputElement).value;
    table.filterGlobal(value, 'contains');
  }

  onAdd() {
    this.onAddClick.emit();
  }

  onEdit(row: any) {
    this.onEditClick.emit(row);
  }

  onDelete(row: any) {
    this.onDeleteClick.emit(row);
  }

  onView(row: any) {
    this.onViewClick.emit(row);
  }

  onExport() {
    this.onExportClick.emit();
  }

  onRefresh() {
    this.onRefreshClick.emit();
  }

  onBulkDelete() {
    this.onBulkDeleteClick.emit(this.selectedRows);
  }

  isRowSelected(row: any): boolean {
    return this.selectedRows.some(selected => selected.id === row.id);
  }
}
