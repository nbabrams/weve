function Button() {
  return (
    <div className="absolute bg-gradient-to-b from-[#f5802c] h-[33px] left-[143px] rounded-[6px] to-[#b9420a] top-[67px] w-[78.773px]" data-name="Button">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[21px] left-[38.5px] not-italic text-[#fbf9f8] text-[14px] text-center text-nowrap top-[5px] tracking-[-0.1504px] translate-x-[-50%] whitespace-pre">Submit</p>
    </div>
  );
}

export default function WeveApp() {
  return (
    <div className="bg-[#fbf9f8] relative size-full" data-name="WE\'VE App - 1.2">
      <Button />
    </div>
  );
}