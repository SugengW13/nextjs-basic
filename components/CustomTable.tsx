'use client'

import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Button
} from "@nextui-org/react";
import EyeIcon from "@/components/icons/EyeIcon"
import EditIcon from "@/components/icons/EditIcon";
import DeleteIcon from "@/components/icons/DeleteIcon";
import {useRouter} from "next/navigation";

export default function CustomTable () {
  const router = useRouter()

  return (
    <Table aria-label='Custom table'>
      <TableHeader>
        <TableColumn>No</TableColumn>
        <TableColumn>Name</TableColumn>
        <TableColumn>Total Game</TableColumn>
        <TableColumn>Actions</TableColumn>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>[ No ]</TableCell>
          <TableCell>[ Name ]</TableCell>
          <TableCell>[ Total Game ]</TableCell>
          <TableCell>
            <div className='flex items-center'>
              <span
                className='cursor-pointer active:opacity-50'
                onClick={() => router.push('/publisher/0')}
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
      </TableBody>
    </Table>
  )
}