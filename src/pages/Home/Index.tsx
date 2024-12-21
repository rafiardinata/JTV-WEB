import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Ripple from '@/components/ui/ripple';
import { Edit, LogOut, PanelsTopLeft, QrCode } from 'lucide-react';
import { useEffect } from 'react'

const Home = () => {

    useEffect(() => {
        document.title = "JTV | Home";
    })

    return (
        <>
            <main className='flex min-h-screen flex-col px-5 items-center justify-center font-poppins'>
                <div className='flex flex-col gap-4 items-center justify-center'>
                    <header className='bg-white p-5 rounded-[20px] w-full'>
                        <img
                            src="/images/logo/JTV.png"
                            alt="Logo JTV"
                            className='w-14 hover:-translate-y-1 transition duration-400 cursor-pointer'
                        />
                    </header>

                    <div className="bg-white rounded-[20px] shadow-md p-6 sm:w-[400px] w-[300px]">
                        <div className="relative">
                            <img
                                src="/images/banner.jpg"
                                alt="Background"
                                className="w-full h-48 object-cover rounded-lg"
                            />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <img
                                    src="/images/rafi.png"
                                    alt="Profil"
                                    className='w-[110px] mt-[190px] rounded-full bg-secondary-600' />
                            </div>
                        </div>
                        <p className="mt-[75px] text-center font-semibold text-[16px]">
                            Rafi Ardinata Riskiansyah
                        </p>
                        <div className='flex gap-3 items-center justify-center mt-3 text-secondary-600 font-medium sm:text-xs text-[10px]'>
                            <div className='flex bg-secondary-600 bg-opacity-15 py-1 px-2 rounded-md items-center'>
                                <p>Lihat QR Code</p>
                                <QrCode className='ml-2 w-[16px]' />
                            </div>
                            <div className='flex bg-secondary-600 bg-opacity-15 py-1 px-2 rounded-md items-center'>
                                <p>Izin Tidak Hadir</p>
                                <PanelsTopLeft className='ml-2 w-[16px]' />
                            </div>
                        </div>

                        <div>
                            {/* <Button
                                type="submit"
                                variant={'default'}
                                className="w-full mt-5 font-bold text-lg bg-secondary-600"
                            >
                                Ubah Kata Sandi
                            </Button> */}
                            <Dialog>
                                <DialogTrigger asChild>
                                    <Button
                                        variant="default"
                                        className='w-full mt-5 font-semibold text-lg bg-secondary-600'
                                    >
                                        <Edit />
                                        Ubah Kata Sandi
                                    </Button>
                                </DialogTrigger>
                                <DialogContent className="sm:max-w-[425px] max-w-[300px] rounded-xl">
                                    <DialogHeader>
                                        <DialogTitle>Edit profile</DialogTitle>
                                        <DialogDescription>
                                            Buat perubahan pada profil Anda di sini. Klik simpan setelah selesai.
                                        </DialogDescription>
                                    </DialogHeader>
                                    <div className="grid gap-4 py-4">
                                        <div className="grid grid-cols-4 items-center gap-4">
                                            <Label htmlFor="username" className="text-right">
                                                Username
                                            </Label>
                                            <Input
                                                id="name"
                                                // defaultValue="Pedro Duarte"
                                                placeholder='Username'
                                                className="col-span-3"
                                            />
                                        </div>
                                        <div className="grid grid-cols-4 items-center gap-4">
                                            <Label htmlFor="new_password" className="text-right">
                                                New Password
                                            </Label>
                                            <Input
                                                id="username"
                                                // defaultValue="peduarte"
                                                placeholder='New Password'
                                                className="col-span-3"
                                            />
                                        </div>
                                    </div>
                                    <DialogFooter>
                                        <Button type="submit">Save changes</Button>
                                    </DialogFooter>
                                </DialogContent>
                            </Dialog>

                            <a href="/login">
                                <Button
                                    type="submit"
                                    variant={'outline'}
                                    className="w-full mt-5 font-semibold text-lg text-red-600"
                                >
                                    <LogOut />
                                    Keluar
                                </Button>
                            </a>
                        </div>

                    </div>
                </div>
                <Ripple />
            </main>
        </>
    )
}

export default Home