import Prompt from "@models/prompt";
import { connectToDB } from "@utils/database";

// GET (read)

export const GET = async (request, { params }) => {
  try {
    await connectToDB();

    const prompts = await Prompt.findById(params.id).populate("creator");

    if (!prompts) return new Response("Prompt not found", { status: 404 });

    return new Response(JSON.stringify(prompts), { status: 200 });
  } catch (error) {
    return new Response("Failed to fetch all prompts", { status: 500 });
  }
};

//PATCH (update)
export const PATCH = async (request, { params }) => {
  const { prompt, tag } = await request.json();

  try {
    await connectToDB();

    const existingPrompts = await Prompt.findById(params.id);

    if (!existingPrompts)
      return new Response("Prompt not found", { status: 404 });

    existingPrompts.prompt = prompt;
    existingPrompts.tag = tag;

    await existingPrompts.save();

    return new Response(JSON.stringify(existingPrompts), { status: 200 });
  } catch (err) {
    return new Response("Failed to update prompt", { status: 500 });
  }
};

//DELETE (delete)
export const DELETE = async (repuest, { params }) => {
  try {
    await connectToDB();

    await Prompt.findByIdAndDelete(params.id);

    return new Response("Prompt deleted seccussfully", { status: 200 });
  } catch (err) {
    return new Response("Failed to delete prompt", { status: 500 });
  }
};
