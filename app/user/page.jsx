import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import React from 'react'

const page = async () => {
    const user = await prisma.user.findMany()
    console.log(user)
    return (
        <div>

            <h1 className='py-10 text-center text-2xl text-gray-700' >Recent Users</h1>
            <div className="container bg-gray-100 p-5 rounded-lg">
                <Table>

                    <TableHeader>
                        <TableRow>
                            <TableHead className="w-[100px]">Id</TableHead>
                            <TableHead>Name</TableHead>
                            <TableHead>Email</TableHead>
                            <TableHead className="text-right">Role</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {
                            user.map((u, i) => {
                                return (
                                    <TableRow key={i}>
                                        <TableCell className="font-medium">{i + 1}</TableCell>
                                        <TableCell>{u.username}</TableCell>
                                        <TableCell>{u.email}</TableCell>
                                        <TableCell className="text-right">{u.role}</TableCell>
                                    </TableRow>
                                )
                            })}
                    </TableBody>
                </Table>
            </div>

        </div>

    )


}

export default page