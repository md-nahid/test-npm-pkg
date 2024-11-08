import React from 'react';
import { cn } from 'src/lib/cn';
import { tableStyles } from 'src/lib/table-style';
import { makeClassName } from '../../lib/make-class-name';

export type TableVariantProps = keyof typeof tableStyles.variants;
export interface TableProps extends React.ComponentPropsWithRef<'table'> {
  variant?: TableVariantProps;
}

export const Table = React.forwardRef<HTMLTableElement, TableProps>(
  ({ className, variant = 'modern', ...props }, ref) => (
    <table
      ref={ref}
      className={cn(
        makeClassName(`table-root`),
        tableStyles.variants[variant],
        className,
      )}
      {...props}
    />
  ),
);

export const TableHeader = React.forwardRef<
  HTMLTableSectionElement,
  React.ComponentPropsWithRef<'thead'>
>(({ className, ...props }, ref) => (
  <thead
    ref={ref}
    className={cn(makeClassName(`table-header`), className)}
    {...props}
  />
));

export const TableBody = React.forwardRef<
  HTMLTableSectionElement,
  React.ComponentPropsWithRef<'tbody'>
>(({ className, ...props }, ref) => (
  <tbody
    ref={ref}
    className={cn(makeClassName(`table-body`), className)}
    {...props}
  />
));

export const TableFooter = React.forwardRef<
  HTMLTableSectionElement,
  React.ComponentPropsWithRef<'tfoot'>
>(({ className, ...props }, ref) => (
  <tfoot
    ref={ref}
    className={cn(makeClassName(`table-footer`), className)}
    {...props}
  />
));

export const TableRow = React.forwardRef<
  HTMLTableRowElement,
  React.ComponentPropsWithRef<'tr'>
>(({ className, ...props }, ref) => (
  <tr
    ref={ref}
    className={cn(makeClassName(`table-row`), className)}
    {...props}
  />
));

export const TableHead = React.forwardRef<
  HTMLTableCellElement,
  React.ComponentPropsWithRef<'th'>
>(({ className, ...props }, ref) => (
  <th
    ref={ref}
    className={cn(makeClassName(`table-head`), className)}
    {...props}
  />
));

export const TableCell = React.forwardRef<
  HTMLTableCellElement,
  React.ComponentPropsWithRef<'td'>
>(({ className, ...props }, ref) => (
  <td
    ref={ref}
    className={cn(makeClassName(`table-cell`), className)}
    {...props}
  />
));

Table.displayName = 'Table';
TableHeader.displayName = 'TableHeader';
TableBody.displayName = 'TableBody';
TableFooter.displayName = 'TableFooter';
TableRow.displayName = 'TableRow';
TableHead.displayName = 'TableHead';
TableCell.displayName = 'TableCell';
