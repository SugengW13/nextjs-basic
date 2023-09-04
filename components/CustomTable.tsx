'use client'

import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell
} from "@nextui-org/react";
import EyeIcon from "@/components/icons/EyeIcon"
import EditIcon from "@/components/icons/EditIcon";
import DeleteIcon from "@/components/icons/DeleteIcon";
import {useRouter} from "next/navigation";

interface Props {
  tableHeaders: string[]
  tableItems: { [key: string]: any}[]
}

export default function CustomTable (props: Props) {
  const router = useRouter()
  const tableHeaders: string[] = props.tableHeaders
  const tableItems: { [key: string]: string }[] = props.tableItems

  return (
    <>
      <Table aria-label='Custom table'>
        <TableHeader>
          { tableHeaders.map((header: string) => (
            <TableColumn key={header.toLowerCase().replace(' ', '_')}>
              { header }
            </TableColumn>
          ))}
        </TableHeader>
        <TableBody>
          { tableItems.map((item: { [key: string]: any }, index: number) => (
            <TableRow key={item.id}>
              <TableCell key=''>{ index + 1 }</TableCell>
              <TableCell key=''>{ item.name }</TableCell>
              <TableCell key=''>{ item.total_games }</TableCell>
              <TableCell key=''>
                <div className='flex items-center'>
                <span
                  className='cursor-pointer active:opacity-50'
                  onClick={() => router.push(`/publisher/${item.id}`)}
                >
                  <EyeIcon />
                </span>
                  <span className='mx-2 cursor-pointer active:opacity-50'>
                  <EditIcon />
                </span>
                  <span className='cursor-pointer active:opacity-50'>
                  <DeleteIcon />
                </span>
                </div>
              </TableCell>
            </TableRow>
          )) }
        </TableBody>
      </Table>
    </>
  )
}