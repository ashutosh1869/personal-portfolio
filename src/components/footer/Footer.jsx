import React from 'react'


export default function Footer() {
return (
    <div>
        <hr className="my-3 border-gray-200 sm:mx-auto lg:my-2" />
        <div className="sm:flex sm:items-center px-5 sm:justify-between">
            <span className="text-sm text-gray-500 sm:text-center">
                © 2025
                <a href="#" className="hover:underline">
                    ashutoshpanigrahi
                </a>
                . All Rights Reserved.
            </span>
            <div className="flex mt-4 space-x-5 p-5 sm:justify-center  sm:mt-0">
            <a href="https://github.com/ashutosh1869" target='_blank' rel="noreferrer" className='hover:text-yellow-600'>
                    <svg
                        className="w-6 h-6"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            fillRule="evenodd"
                            d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.34-3.369-1.34-.454-1.154-1.11-1.461-1.11-1.461-.908-.62.069-.607.069-.607 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.682-.103-.253-.446-1.272.098-2.65 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.91-1.294 2.75-1.025 2.75-1.025.544 1.378.201 2.397.099 2.65.64.698 1.028 1.591 1.028 2.682 0 3.842-2.337 4.687-4.563 4.936.36.31.682.92.682 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.579.688.481C19.138 20.165 22 16.418 22 12c0-5.523-4.477-10-10-10z"
                            clipRule="evenodd"
                        />
                    </svg>
                    <span className="sr-only">GitHub account</span>
                </a>
                <a href="https://x.com/ashutoshprem04" target='_blank' rel="noreferrer" className='hover:text-yellow-600'>
                    <svg
                        className="w-6 h-6"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            fillRule="evenodd"
                            d="M23.954 4.569c-.885.392-1.83.656-2.825.775 1.014-.608 1.794-1.574 2.163-2.723-.951.564-2.005.974-3.127 1.195-.896-.957-2.171-1.56-3.584-1.56-2.717 0-4.92 2.202-4.92 4.92 0 .386.044.76.127 1.118-4.09-.205-7.71-2.158-10.125-5.14-.424.724-.666 1.57-.666 2.476 0 1.706.867 3.208 2.188 4.085-.807-.025-1.566-.248-2.228-.616v.06c0 2.385 1.693 4.374 3.946 4.827-.413.112-.848.173-1.296.173-.316 0-.622-.03-.925-.089.623 1.945 2.426 3.366 4.564 3.402-1.673 1.312-3.786 2.094-6.076 2.094-.395 0-.784-.023-1.17-.068 2.165 1.39 4.74 2.204 7.51 2.204 9.012 0 13.93-7.48 13.93-13.928 0-.21-.005-.42-.014-.63.958-.688 1.8-1.55 2.457-2.527z"
                            clipRule="evenodd"
                        />
                    </svg>
                    <span className="sr-only">Twitter account</span>
                </a>
                <a href="https://www.linkedin.com/in/ashutosh-panigrahi-7701a01b2/" target='_blank' rel="noreferrer" className='hover:text-yellow-600'>
                    <svg
                        className="w-6 h-6"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            fillRule="evenodd"
                            d="M19.998 3H4.002C3.448 3 3 3.448 3 4.002v15.996C3 20.552 3.448 21 4.002 21h15.996C20.552 21 21 20.552 21 19.998V4.002C21 3.448 20.552 3 19.998 3zM8.337 18.337H5.663V9.663h2.674v8.674zM7 8.337c-.86 0-1.563-.703-1.563-1.563S6.14 5.211 7 5.211s1.563.703 1.563 1.563S7.86 8.337 7 8.337zm11.337 10H15.663v-4.337c0-1.03-.837-1.867-1.867-1.867s-1.867.837-1.867 1.867v4.337H9.663V9.663h2.674v1.337c.37-.63 1.03-1.337 1.867-1.337 1.63 0 2.963 1.333 2.963 2.963v5.711z"
                            clipRule="evenodd"
                        />
                    </svg>
                    <span className="sr-only">LinkedIn account</span>
                </a>
            </div>
        </div>
    </div>
)
}

