'use server';

/**
 * @fileOverview This file defines a Genkit flow for generating SEO-friendly meta descriptions and title tags for blog posts.
 *
 * The flow takes the blog post content as input and returns an object containing the generated meta description and title tag.
 *
 * - `generateSEOMetaData` - A function that generates SEO metadata for a blog post.
 * - `GenerateSEOMetaDataInput` - The input type for the `generateSEOMetaData` function.
 * - `GenerateSEOMetaDataOutput` - The return type for the `generateSEOMetaData` function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateSEOMetaDataInputSchema = z.object({
  blogPostContent: z
    .string()
    .describe('The content of the blog post to generate SEO metadata for.'),
});
export type GenerateSEOMetaDataInput = z.infer<typeof GenerateSEOMetaDataInputSchema>;

const GenerateSEOMetaDataOutputSchema = z.object({
  metaDescription: z
    .string()
    .describe('The generated meta description for the blog post.'),
  titleTag: z.string().describe('The generated title tag for the blog post.'),
});
export type GenerateSEOMetaDataOutput = z.infer<typeof GenerateSEOMetaDataOutputSchema>;

export async function generateSEOMetaData(
  input: GenerateSEOMetaDataInput
): Promise<GenerateSEOMetaDataOutput> {
  return generateSEOMetaDataFlow(input);
}

const generateSEOMetaDataPrompt = ai.definePrompt({
  name: 'generateSEOMetaDataPrompt',
  input: {schema: GenerateSEOMetaDataInputSchema},
  output: {schema: GenerateSEOMetaDataOutputSchema},
  prompt: `You are an SEO expert. Generate a meta description and title tag for the following blog post content.

Blog Post Content:
{{blogPostContent}}

Meta Description:`, // The LLM should ideally return a meta description and title tag with content that is around 150-160 characters in length
  config: {
    safetySettings: [
      {
        category: 'HARM_CATEGORY_DANGEROUS_CONTENT',
        threshold: 'BLOCK_NONE',
      },
      {
        category: 'HARM_CATEGORY_HATE_SPEECH',
        threshold: 'BLOCK_NONE',
      },
      {
        category: 'HARM_CATEGORY_HARASSMENT',
        threshold: 'BLOCK_NONE',
      },
      {
        category: 'HARM_CATEGORY_SEXUALLY_EXPLICIT',
        threshold: 'BLOCK_NONE',
      },
    ],
  },
});

const generateSEOMetaDataFlow = ai.defineFlow(
  {
    name: 'generateSEOMetaDataFlow',
    inputSchema: GenerateSEOMetaDataInputSchema,
    outputSchema: GenerateSEOMetaDataOutputSchema,
  },
  async input => {
    const {output} = await generateSEOMetaDataPrompt(input);
    return output!;
  }
);
