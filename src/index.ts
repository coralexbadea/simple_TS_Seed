import { pipeline } from '@xenova/transformers';

const generateEmbeddings = await pipeline(
  'feature-extraction',
  'Xenova/all-MiniLM-L6-v2'
);

const output1 = await generateEmbeddings('That is a happy person', {
  pooling: 'mean',
  normalize: true,
});

console.log(output1)