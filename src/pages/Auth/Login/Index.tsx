import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input";
import Ripple from "@/components/ui/ripple";
import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const loginSchema = z.object({
    username: z.string().min(1, "Username harus di isi"),
    password: z.string().min(1, "Password harus di isi"),
});

const Login = () => {

    useEffect(() => {
        document.title = "JTV | Masuk";
    })

    // const { login, isLoginPending } = useAuth();

    const form = useForm<z.infer<typeof loginSchema>>({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            username: "",
            password: "",
        },
    });

    function onSubmit(values: z.infer<typeof loginSchema>) {
        console.log(values)
    }

    return (
        <>
            <main className='flex min-h-screen flex-col px-5 items-center justify-center'>
                <div className='sm:w-[500px] sm:p-14 p-7 rounded-[40px] border-[2px] shadow-xl flex flex-col justify-center items-center bg-white'>
                    <img
                        src="/images/logo/JTV.png"
                        alt="Logo JTV"
                        className='w-24 hover:-translate-y-1 transition duration-400 cursor-pointer'
                    />
                    <h1 className="mt-7 text-center font-bold text-[20px] text-secondary-900 font-poppins">
                        Selamat Datang Kembali
                    </h1>
                    <p className="py-3 text-center font-poppins text-[14px] sm:w-[300px]">
                        Silahkan masukkan username & password Anda untuk masuk
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
                                                    "mt-2 focus-visible:border-none",
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
                                                    "mt-2 focus-visible:border-none",
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
                            <Button
                                type="submit"
                                variant={'default'}
                                className="w-full mt-5 font-bold text-lg bg-secondary-600"
                            >
                                Masuk
                            </Button>
                            <div className="w-fit mt-5 font-semibold text-sm text-secondary-900">
                                Apakah belum memiliki akun?{' '}
                                <a
                                    href="/register"
                                    // target="_blank"
                                    // rel="noopener noreferrer"
                                    className="font-bold text-xs text-secondary-600 hover:underline"
                                >
                                    Daftar
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

export default Login