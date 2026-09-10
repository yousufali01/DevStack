import { useState } from "react";
import technologiesData from "../data/technology.json";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type Technology = {
  id: string;
  name: string;
  category:
    | "Frontend"
    | "Backend"
    | "Database"
    | "Language"
    | "Styling"
    | "DevOps"
    | "Tools";
  description: string;
  icon: string;
  rating: number;
  difficulty: "Beginner-Friendly" | "Intermediate" | "Advanced";
  badge: string;
};

const technologies = technologiesData as Technology[];

const Technologies = () => {
  const [stack, setStack] = useState<Technology[]>([]);

  const addToStack = (technology: Technology) => {
    const alreadyAdded = stack.some((item) => item.id === technology.id);

    if (alreadyAdded) {
      toast.warning(`${technology.name} is already in your stack!`);
      return;
    }

    setStack((prev) => [...prev, technology]);

    toast.success(`${technology.name} added to your stack`);
  };

  const removeFromStack = (id: string) => {
    setStack((prev) => prev.filter((item) => item.id !== id));
  };

  const removeAll = () => {
    setStack([]);
  };

  const isAdded = (id: string) => {
    return stack.some((item) => item.id === id);
  };

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnHover
        toastClassName="!bg-linear-to-r !from-[#ff5a2f] !via-[#e62e7b] !to-[#8b2be2] !text-white"
      />

      <section
        id="technologies"
        className=" w-full bg-white px-4 py-16 sm:px-6 lg:px-8"
      >
        <div className="mx-auto max-w-[90%]">
          {/* Section Header */}
          <div className="mb-7 text-center sm:text-left">
            <h1 className="text-[42px] font-extrabold leading-[1.05] tracking-[-1.5px] text-[#111827] sm:text-[48px] md:text-[52px]">
              Explore the{" "}
              <span className="bg-linear-to-r from-[#ff5a2f] via-[#e62e7b] to-[#8b2be2] bg-clip-text text-transparent">
                Technologies
              </span>
            </h1>

            <p className="mt-3 text-[15px] text-[#64748b]">
              Pick one technology per category to build your ideal stack.
            </p>
          </div>

          {/* Technology Grid + Stack */}
          <div className="grid grid-cols-1 gap-5 lg:grid-cols-4">
            {/* Technology Cards */}
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:col-span-3 lg:grid-cols-3">
              {technologies.map((technology) => {
                const added = isAdded(technology.id);

                return (
                  <div
                    key={technology.id}
                    className={`p-3 flex min-h-42 flex-col rounded-xl border bg-white  shadow-[0_2px_8px_rgba(15,23,42,0.04)] transition hover:-translate-y-0.5 hover:shadow-[0_5px_18px_rgba(15,23,42,0.08)] ${
                      added ? "border-[#22c55e]" : "border-[#e9edf2]"
                    }`}
                  >
                    {/* Icon + Badge */}
                    <div className="mb-7 mt-0 flex items-center justify-between ">
                      <img
                        src={technology.icon}
                        alt={`${technology.name} icon`}
                        // className="h-6 w-6 object-contain"
                        className="h-9 w-9 object-contain"
                      />

                      <span
                        className={`rounded-full px-2 py-0.5 text-[15px] font-medium ${
                          technology.badge === "Popular"
                            ? "bg-blue-100 text-blue-600"
                            : technology.badge === "Versatile"
                              ? "bg-purple-100 text-purple-600"
                              : technology.badge === "Fast"
                                ? "bg-green-100 text-green-600"
                                : technology.badge === "SSR / Edge"
                                  ? "bg-orange-100 text-orange-600"
                                  : technology.badge === "Standard"
                                    ? "bg-yellow-100 text-yellow-600"
                                    : technology.badge === "Top SQL"
                                      ? "bg-indigo-100 text-indigo-600"
                                      : technology.badge === "Cache"
                                        ? "bg-red-100 text-red-600"
                                        : technology.badge === "Ubiquitous"
                                          ? "bg-cyan-100 text-cyan-600"
                                          : technology.badge === "Essential"
                                            ? "bg-pink-100 text-pink-600"
                                            : technology.badge === "Robust"
                                              ? "bg-gray-100 text-gray-600"
                                              : technology.badge === "Modern"
                                                ? "bg-teal-100 text-teal-600"
                                                : technology.badge ===
                                                    "Containers"
                                                  ? "bg-sky-100 text-sky-600"
                                                  : "bg-[#f1f4f7] text-[#64748b]"
                        }`}
                      >
                        {technology.badge}
                      </span>
                    </div>

                    {/* Name */}
                    <h3 className="text-[15px] font-bold text-[#111827]">
                      {technology.name}
                    </h3>

                    {/* Description */}
                    <p className="mt-2 mb-8 line-clamp-2 min-h-7 text-[15px] leading-[1.45] text-[#7a8798]">
                      {technology.description}
                    </p>

                    {/* Category + Difficulty + Rating */}
                    <div className="mt-auto pt-2">
                      <div className="mb-2 flex items-center justify-between gap-1 text-[10]">
                        <span className="rounded bg-[#f1f5f9] px-1.5 py-1 text-[#64748b]">
                          {technology.category}
                        </span>

                        <span className="text-[#64748b]">
                          {technology.difficulty}
                        </span>

                        <span className="font-medium text-[#64748b]">
                          <span className="mr-0.5 text-[#f59e0b]">★</span>
                          {technology.rating}
                        </span>
                      </div>

                      {/* Add Button */}
                      <button
                        onClick={() => addToStack(technology)}
                        disabled={added}
                        className={`w-full  mb-5 mt-5 rounded-md px-2 py-1.5 text-[15px] font-medium transition ${
                          added
                            ? "cursor-not-allowed bg-[#e8f7ee] text-[#16a34a]"
                            : "bg-[#111827] text-white hover:bg-[#1f2937]"
                        }`}
                      >
                        {added ? "✓ Added to Stack" : "Add to Stack"}
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Your Stack Sidebar */}
            <aside className="h-fit rounded-xl border border-[#e9edf2] bg-white p-4 shadow-[0_2px_8px_rgba(15,23,42,0.03)] lg:col-span-1">
              {/* Stack Header */}
              <div className="mb-4">
                <h3 className="text-[18px] font-bold text-[#111827]">
                  Your Stack
                </h3>

                <p className="mt-0.5 text-[15px] text-[#94a3b8]">
                  {stack.length} Technology{" "}
                  {stack.length === 1 ? "Selected" : "Selected"}
                </p>
              </div>

              {/* Stack Items */}
              <div className="space-y-2">
                {stack.length === 0 ? (
                  <div className="rounded-lg border border-dashed border-[#e5e7eb] px-3 py-8 text-center">
                    <p className="text-[15px] text-[#94a3b8]">
                      No technologies selected yet.
                    </p>

                    <p className="mt-1 text-[15px] text-[#cbd5e1]">
                      Add technologies to build your stack.
                    </p>
                  </div>
                ) : (
                  stack.map((technology) => (
                    <div
                      key={technology.id}
                      className="flex items-center justify-between rounded-lg border border-[#edf0f4] px-2.5 py-2"
                    >
                      {/* Item Info */}
                      <div className="flex min-w-0 items-center gap-2">
                        <img
                          src={technology.icon}
                          alt={technology.name}
                          className="h-9 w-9 shrink-0 object-contain"
                        />

                        <div className="min-w-0">
                          <p className="truncate text-[15px] font-semibold text-[#111827]">
                            {technology.name}
                          </p>

                          <p className="text-[15px] text-[#94a3b8]">
                            {technology.category}
                          </p>
                        </div>
                      </div>

                      {/* Remove Button */}
                      <button
                        onClick={() => removeFromStack(technology.id)}
                        className="ml-2 shrink-0 text-[14px] font-light text-[#94a3b8] transition hover:text-[#ef4444]"
                        aria-label={`Remove ${technology.name}`}
                      >
                        <span className="text-xl">X</span>
                      </button>
                    </div>
                  ))
                )}
              </div>

              {/* Remove All */}
              <button
                onClick={removeAll}
                disabled={stack.length === 0}
                className={`mt-4 w-full rounded-md border px-3 py-2 text-[15px] font-medium transition ${
                  stack.length === 0
                    ? "cursor-not-allowed border-[#f1f5f9] text-[#cbd5e1]"
                    : "border-[#fecaca] text-[#ef4444] hover:bg-[#fff5f5]"
                }`}
              >
                Remove All
              </button>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
};

export default Technologies;
