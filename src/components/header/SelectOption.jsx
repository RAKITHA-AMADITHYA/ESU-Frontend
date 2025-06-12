function SelectOption({ Icon, Title, Description, onClick }) {
    return (
        <div
            onClick={onClick}
            className="flex items-start p-4 cursor-pointer border-b border-gray-200 transition-all ease-in-out duration-300 hover:bg-gray-100 hover:scale-105"
        >
            {/* Icon Section */}
            <div className="text-orange-500 mr-2 mt-1">
                {Icon}
            </div>

            {/* Text Section */}
            <div>
                <h3 className="text-md font-semibold text-gray-900 transition-colors duration-300 ease-in-out hover:text-orange-500">
                    {Title}
                </h3>

                <p className="text-sm text-gray-500">
                    {Description}
                </p>
            </div>
        </div>
    );
}

export default SelectOption;
