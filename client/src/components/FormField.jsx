const FormField = ({labelName, type, name, placeholder, value, handleChange, isSurpriseMe, handleSurpriseMe}) => {
  return (
    <div>
      <div className="flex items-center gap-2 mb-2">
        <label htmlFor={name} className="block text-gray-900 font-medium text-sm">
          {labelName}
        </label>
        {isSurpriseMe && (
          <button
            type="button"
            onClick={handleSurpriseMe}
            className="font-semibold text-xs bg-yellow-400 py-1 px-2 rounded-[5px] text-black hover:bg-yellow-500 hover:scale-105 hover:text-gray-900 transition-all"
          >
            Surprise Me
          </button>
        )}
      </div>
      <input 
        type={type} 
        name={name}
        id={name}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        required
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#6469ff] focus:border-[#4649ff] outline-none block w-full p-3"
      />    
    </div>
  )
}

export default FormField