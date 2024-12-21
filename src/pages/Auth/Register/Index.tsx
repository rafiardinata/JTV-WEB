import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import Ripple from "@/components/ui/ripple";
import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const loginSchema = z.object({
    username: z.string().min(1, "Username harus di isi"),
    password: z.string().min(1, "Password harus di isi"),
    confirmpassword: z.string().min(1, "Konfirmasi Password harus di isi"),
    tgl_mulai: z.date({ required_error: "Tanggal Harus di isi" }),
    tgl_akhir: z.date({ required_error: "Tanggal Harus di isi" }),
}).superRefine((data, ctx) => {
    if (data.confirmpassword !== data.password) {
        ctx.addIssue({
            code: 'custom',
            message: 'Konfirmasi Passsword Salah',
            path: [
                'confirmpassword'
            ]
        })
    }
})

const Register = () => {

    useEffect(() => {
        document.title = "JTV | Daftar";
    })

    // const { login, isLoginPending } = useAuth();

    // const [date, setDate] = React.useState<DateRange | undefined>({
    //     from: new Date(2022, 0, 20),
    //     to: addDays(new Date(2022, 0, 20), 20),
    // })

    const form = useForm<z.infer<typeof loginSchema>>({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            username: "",
            password: "",
            confirmpassword: "",
        },
    });

    function onSubmit(values: z.infer<typeof loginSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values)
    }

    return (
        <>
            <main className='flex min-h-screen flex-col px-5 items-center justify-center'>
                <div className='sm:w-[600px] sm:p-14 p-7 px-4 sm:px-7 rounded-[40px] shadow-xl flex flex-col justify-center items-center bg-white'>
                    <img
                        src="/images/logo/JTV.png"
                        alt="Logo JTV"
                        className='w-24 hover:-translate-y-1 transition duration-400 cursor-pointer'
                    />
                    <h1 className="mt-7 text-center font-bold text-[20px] text-secondary-900 font-poppins">
                        Daftar Akun
                    </h1>
                    <p className="py-3 text-center font-poppins text-[14px] sm:w-[300px] w-[250px]">
                        Silahkan isi data Anda dibawah ini untuk mendaftar
                    </p>
                    <Form {...form}>
                        <form
                            onSubmit={form.handleSubmit(onSubmit)}
                            className="w-full space-y-5 items-center flex flex-col"
                        >
                            <FormField
                                control={form.control}
                                name="username"
                                render={({ field, fieldState }) => (
                                    <FormItem className="w-full">
                                        <FormLabel className="text-black">Username</FormLabel>
                                        <FormControl>
                                            <Input
                                                {...field}
                                                className={cn(
                                                    "mt-2 focus-visible:border-none text-[12px] sm:text-[14px]",
                                                    fieldState.error &&
                                                    "border border-accent-500"
                                                )}
                                                autoComplete="off"
                                                placeholder="Username"
                                            />
                                        </FormControl>
                                        <FormMessage className="font-bold text-red-500" />
                                    </FormItem>
                                )}
                            />

                            <div className="flex w-full gap-4">
                                <FormField
                                    control={form.control}
                                    name="password"
                                    render={({ field, fieldState }) => (
                                        <FormItem className="w-full">
                                            <FormLabel className="text-black">Password</FormLabel>
                                            <FormControl    >
                                                <Input
                                                    {...field}
                                                    className={cn(
                                                        "mt-2 focus-visible:border-none text-[12px] sm:text-[14px]",
                                                        fieldState.error &&
                                                        "border border-accent-500"
                                                    )}
                                                    type="password"
                                                    autoComplete="off"
                                                    placeholder="Password"
                                                />
                                            </FormControl>
                                            <FormMessage className="font-bold text-red-500" />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="confirmpassword"
                                    render={({ field, fieldState }) => (
                                        <FormItem className="w-full">
                                            <FormLabel className="text-black">Konfirmasi Password</FormLabel>
                                            <FormControl>
                                                <Input
                                                    {...field}
                                                    className={cn(
                                                        "mt-2 focus-visible:border-none w-full text-[12px] sm:text-[14px]",
                                                        fieldState.error &&
                                                        "border border-accent-500"
                                                    )}
                                                    type="password"
                                                    autoComplete="off"
                                                    placeholder="Konfirmasi Password"
                                                />
                                            </FormControl>
                                            <FormMessage className="font-bold text-red-500" />
                                        </FormItem>
                                    )}
                                />
                            </div>

                            <div className={cn("flex gap-4 w-full")}>
                                <FormField
                                    control={form.control}
                                    name="tgl_mulai"
                                    render={({ field, fieldState }) => (
                                        <FormItem className="w-full">
                                            <FormLabel>Tanggal Mulai</FormLabel>
                                            <Popover>
                                                <PopoverTrigger asChild>
                                                    <FormControl>
                                                        <Button
                                                            variant={"outline"}
                                                            className={cn(
                                                                "text-left font-normal w-full",
                                                                !field.value && "text-muted-foreground",
                                                                fieldState.error && "border border-accent-500"
                                                            )}
                                                        >
                                                            {field.value ? (
                                                                format(field.value, "dd/MM/yyyy")
                                                            ) : (
                                                                <span className="font-poppins text-xs text-zinc-400">Pilih Tanggal</span>
                                                            )}
                                                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                                        </Button>
                                                    </FormControl>
                                                </PopoverTrigger>
                                                <PopoverContent className="w-auto p-0" align="start">
                                                    <Calendar
                                                        mode="single"
                                                        selected={field.value}
                                                        onSelect={field.onChange}
                                                        // disabled={(date) =>
                                                        //     date > new Date() || date < new Date("1900-01-01")
                                                        // }
                                                        initialFocus
                                                    />
                                                </PopoverContent>
                                            </Popover>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="tgl_akhir"
                                    render={({ field, fieldState }) => (
                                        <FormItem className="w-full">
                                            <FormLabel>Tanggal Selesai</FormLabel>
                                            <Popover>
                                                <PopoverTrigger asChild>
                                                    <FormControl>
                                                        <Button
                                                            variant={"outline"}
                                                            className={cn(
                                                                "text-left font-normal w-full",
                                                                !field.value && "text-muted-foreground",
                                                                fieldState.error && "border border-accent-500"
                                                            )}
                                                        >
                                                            {field.value ? (
                                                                format(field.value, "dd/MM/yyyy")
                                                            ) : (
                                                                <span className="font-poppins text-xs text-zinc-400">Pilih Tanggal</span>
                                                            )}
                                                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                                        </Button>
                                                    </FormControl>
                                                </PopoverTrigger>
                                                <PopoverContent className="w-auto p-0" align="start">
                                                    <Calendar
                                                        mode="single"
                                                        selected={field.value}
                                                        onSelect={field.onChange}
                                                        // disabled={(date) =>
                                                        //     date > new Date() || date < new Date("1900-01-01")
                                                        // }
                                                        disabled={(
                                                            date
                                                        ) =>
                                                            date <
                                                            new Date()
                                                        }
                                                        initialFocus
                                                    />
                                                </PopoverContent>
                                            </Popover>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>

                            <Button
                                type="submit"
                                variant={'default'}
                                className="w-full mt-5 font-bold text-lg bg-secondary-600"
                            >
                                Daftar
                            </Button>
                            <div className="w-fit mt-5 font-semibold text-sm text-secondary-900">
                                Apakah sudah memiliki akun?{' '}
                                <a
                                    href="/"
                                    // target="_blank"
                                    // rel="noopener noreferrer"
                                    className="font-bold text-xs text-secondary-600 hover:underline"
                                >
                                    Masuk
                                </a>
                            </div>
                        </form>
                    </Form>
                </div>
                <Ripple />
            </main>
        </>
    )
}

export default Register