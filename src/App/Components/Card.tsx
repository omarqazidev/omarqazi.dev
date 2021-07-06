import { ILinks } from '../../data/socials';

interface Props {
    links: ILinks;
}

const Card: React.FC<Props> = ({ links }) => {
    return (
        <div className="m-auto flex flex-col shadow rounded pt-10 pl-20 pr-20 pb-10 bg-gray-50">
            <h1 className="font-semibold text-4xl">Omar Qazi</h1>
            <h3 className="font-light text-xl">Software Engineer at Tintash (Web Team)</h3>
            <div className="flex mt-10 items-center  justify-between ">
                <a href={links.resume} target="_blank">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-7 w-7 text-g-500 text-blue-900 hover:text-blue-800 transform hover:scale-105"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10"
                        />
                    </svg>
                </a>
                <a
                    href={links.linkedin}
                    target="_blank"
                    className="bg-blue-900 px-14 py-2 rounded self-end text-white hover:bg-blue-800 transform flex justify-between"
                >
                    LinkedIn
                </a>
            </div>
        </div>
    );
};

export default Card;
