export default function Footer() {
  return (
    <section className="bg-black pt-32 pb-16">
      <div className="w-4/6 mx-auto ">
        <p className="text-[#86868B]">
          More ways to shop;{" "}
          <span className="text-sky-700 underline">Find an Apple Store</span> or{" "}
          <span className="text-sky-700 underline">other retailer</span> near
          you.{" "}
        </p>
        <p className="text-[#86868B]">Or call 000800-040-1966</p>
        <div className="border border-[#86868B] my-8"></div>
        <div className="flex justify-between">
          <p className="text-[#86868B]">
            Copyright &copy; 2024 Walid. All rights reserved
          </p>
          <div className="flex text-[#86868B] ">
            <p className="pr-2 pl-2 border-r border-r-[#86868B]">
              Privacy Policy
            </p>
            <p className="pr-2 pl-2 border-r border-r-[#86868B]">
              Terms of use
            </p>
            <p className="pr-2 pl-2 border-r border-r-[#86868B]">
              Sales Policy
            </p>
            <p className="pr-2 pl-2 border-r border-r-[#86868B]">Legal</p>
            <p>Site Map</p>
          </div>
        </div>
      </div>
    </section>
  );
}
