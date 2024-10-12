'use client'

import { useState } from 'react';
import ConvertButton from './ConvertButton';
import FileConverted from './FileConverted';
import FileUploadMessage from './FileUploadMessage';
import LoadingConverter from './LoadingConverter';

export default function FileConverterApp() {
	const [uploadedFiles, setUploadedFiles] = useState([])
	const [isConverting, setIsConverting] = useState(false)
	const [convertedFilesArray, setConvertedFiles] = useState([])

	const handleFilesUploaded = files => {
		setUploadedFiles(files)
	}

	const handleConvert = () => {
		setIsConverting(true)
		// Simulating conversion process
		setTimeout(() => {
			setConvertedFiles(
				uploadedFiles.map(file => ({
					...file,
					url: `/converted/${file.name}`, // This would be the actual converted file URL in a real app
					type: 'application/pdf', // Assuming all files are converted to PDF for this example
				}))
			)
			setIsConverting(false)
		}, 2000)
	}

	return (
		<div className='flex py-12 px-4 sm:px-6 lg:px-8'>
			<div className='max-w-7xl mx-auto'>
				<h1 className='text-3xl font-bold text-center mb-10'>
					Upload Your Files
				</h1>

				<div className='space-y-8'>
					<div className='bg-white shadow-md rounded-lg p-6 grid grid-cols-3 gap-6'>
						<FileUploadMessage onFilesUploaded={handleFilesUploaded} />
						<div className='flex justify-center items-center'>
							{isConverting ? (
								<LoadingConverter />
							) : (
								<ConvertButton
									onClick={handleConvert}
									disabled={!(uploadedFiles.length > 0) && isConverting}
								/>
							)}
						</div>
						<div className='flex justify-center items-center'>
							<FileConverted />
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
