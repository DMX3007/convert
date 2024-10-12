import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import WrapperConverter from '@/components/WrapperConverter';
import { ArrowRight, FileText, Image, Music, Video } from 'lucide-react';

export default function Home() {
	return (
		<div className='flex flex-col min-h-screen'>
			<main className='flex-1'>
				<section className='w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-purple-50'>
					<div className='px-4 md:px-6'>
						<div className='flex flex-col items-center space-y-4 text-center'>
							<div className='space-y-2'>
								<h1 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none'>
									Convert Any File, Instantly
								</h1>
								<p className='mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400'>
									Transform your files with ease. Support for over 100+ file
									formats. Fast, secure, and free to use.
								</p>
							</div>
							<div className='space-x-4'>
								<Button className='bg-purple-600 hover:bg-purple-700'>
									Get Started
								</Button>
								<Button variant='outline'>Learn More</Button>
							</div>
						</div>
					</div>
          <WrapperConverter/>
				</section>
				<section className='w-full py-12 md:py-24 lg:py-32 bg-white'>
					<div className='px-4 md:px-6'>
						<h2 className='text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12'>
							How It Works
						</h2>
						<div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
							<Card className='bg-purple-50 border-purple-100 transition-all duration-300 hover:shadow-lg'>
								<CardContent className='flex flex-col items-center space-y-4 p-6'>
									<div className='bg-purple-100 p-3 rounded-full'>
										<FileText className='w-8 h-8 text-purple-600' />
									</div>
									<h3 className='text-xl font-bold text-center'>
										1. Upload Your File
									</h3>
									<p className='text-center text-gray-500'>
										Drag and drop or click to upload your file
									</p>
								</CardContent>
							</Card>
							<Card className='bg-indigo-50 border-indigo-100 transition-all duration-300 hover:shadow-lg'>
								<CardContent className='flex flex-col items-center space-y-4 p-6'>
									<div className='bg-indigo-100 p-3 rounded-full'>
										<ArrowRight className='w-8 h-8 text-indigo-600' />
									</div>
									<h3 className='text-xl font-bold text-center'>
										2. Choose Output Format
									</h3>
									<p className='text-center text-gray-500'>
										Select from a wide range of supported formats
									</p>
								</CardContent>
							</Card>
							<Card className='bg-purple-50 border-purple-100 transition-all duration-300 hover:shadow-lg'>
								<CardContent className='flex flex-col items-center space-y-4 p-6'>
									<div className='bg-purple-100 p-3 rounded-full'>
										<FileText className='w-8 h-8 text-purple-600' />
									</div>
									<h3 className='text-xl font-bold text-center'>
										3. Download Converted File
									</h3>
									<p className='text-center text-gray-500'>
										Get your converted file instantly
									</p>
								</CardContent>
							</Card>
						</div>
					</div>
				</section>
				<section className='w-full py-12 md:py-24 lg:py-32 bg-gray-100'>
					<div className='px-4 md:px-6'>
						<h2 className='text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12'>
							Supported Formats
						</h2>
						<div className='grid grid-cols-2 md:grid-cols-4 gap-8'>
							<div className='flex flex-col items-center space-y-2 bg-white p-4 rounded-lg shadow-sm'>
								<Image className='w-12 h-12 text-purple-600'/>
								<span className='font-semibold'>Images</span>
								<p className='text-sm text-gray-500 text-center'>
									JPG, PNG, GIF, WebP, TIFF
								</p>
							</div>
							<div className='flex flex-col items-center space-y-2 bg-white p-4 rounded-lg shadow-sm'>
								<FileText className='w-12 h-12 text-indigo-600' />
								<span className='font-semibold'>Documents</span>
								<p className='text-sm text-gray-500 text-center'>
									PDF, DOCX, TXT, RTF, ODT
								</p>
							</div>
							<div className='flex flex-col items-center space-y-2 bg-white p-4 rounded-lg shadow-sm'>
								<Video className='w-12 h-12 text-purple-600' />
								<span className='font-semibold'>Videos</span>
								<p className='text-sm text-gray-500 text-center'>
									MP4, AVI, MOV, WMV, FLV
								</p>
							</div>
							<div className='flex flex-col items-center space-y-2 bg-white p-4 rounded-lg shadow-sm'>
								<Music className='w-12 h-12 text-indigo-600' />
								<span className='font-semibold'>Audio</span>
								<p className='text-sm text-gray-500 text-center'>
									MP3, WAV, AAC, FLAC, OGG
								</p>
							</div>
						</div>
					</div>
				</section>
				<section className='w-full py-12 md:py-24 lg:py-32 bg-purple-50'>
					<div className='px-4 md:px-6'>
						<h2 className='text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12'>
							What Our Users Say
						</h2>
						<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
							<Card className='bg-white'>
								<CardContent className='p-6'>
									<p className='text-gray-500 mb-4'>
										&quot;This tool saved me so much time! I was able to convert all
										my old files in minutes.&quot;
									</p>
									<p className='font-semibold'>- Sarah T.</p>
								</CardContent>
							</Card>
							<Card className='bg-white'>
								<CardContent className='p-6'>
									<p className='text-gray-500 mb-4'>
										&quot;The best file converter I&apos;ve used. Simple, fast, and
										reliable.&quot;
									</p>
									<p className='font-semibold'>- Mike R.</p>
								</CardContent>
							</Card>
							<Card className='bg-white'>
								<CardContent className='p-6'>
									<p className='text-gray-500 mb-4'>
										&quot;I love how many formats are supported. It&apos;s my go-to tool
										for all file conversions.&quot;
									</p>
									<p className='font-semibold'>- Emily L.</p>
								</CardContent>
							</Card>
						</div>
					</div>
				</section>
				<section className='w-full py-12 md:py-24 lg:py-32 bg-purple-600 text-white'>
					<div className='px-4 md:px-6'>
						<div className='flex flex-col items-center space-y-4 text-center'>
							<div className='space-y-2'>
								<h2 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl'>
									Ready to Convert?
								</h2>
								<p className='mx-auto max-w-[600px] text-purple-100 md:text-xl'>
									Start converting your files now. No sign-up required.
								</p>
							</div>
							<div className='space-x-4'>
								<Button className='bg-white text-purple-600 hover:bg-purple-50'>
									Get Started for Free
								</Button>
							</div>
						</div>
					</div>
				</section>
			</main>
		</div>
	)
}
