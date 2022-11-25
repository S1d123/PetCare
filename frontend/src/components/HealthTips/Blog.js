import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import MainFeaturedPost from './MainFeatured';
import FeaturedPost from './FeaturedPost';

const mainFeaturedPost = {
  title: 'Health Tips For our loving Pets',
  description:
    "Just feeding and excercising our cute little animals is not enough , like us they too need special   measures to maintain health, they can't speak for themselves and tell us what they want , so it is our duty to understand what is needed to be done",
  image: 'https://img.freepik.com/free-photo/front-view-beautiful-dog-with-copy-space_23-2148786499.jpg?w=1380&t=st=1665301292~exp=1665301892~hmac=8f2aca66086411b987db9eaa976567abebd9f6bb43c1a1844d8a667ac7c37147',
  imageText: 'main image description',
};
const featuredPosts = [
  {
    title: 'Are You Feeding Your Dog the Right Amount?',
    description:
      ' One of the best ways to keep dogs healthy is to feed them the right amount of a high-quality dog food. Feeding your dog too much or not enough can have certain health consequences.Here’s why it matters and what you can do to determine how much to feed your dog. If you feed your dog too little, they can suffer from nutritional deficiencies.However, If you feed your dog too much, it will eventually result in obesity and its related health issues, like: Musculoskeletal problems like osteoarthritis, cruciate ligament ruptures, and intervertebral disk disease, Congestive heart failure,Labored breathing,Cushing’s disease, Skin disorders,Some types of cancer,Shortened life span, Reduced quality of life',
    image: 'https://image.petmd.com/files/styles/863x625/public/yellow-lab-waiting-to-be-fed.jpg?w=1080&q=75',
    imageLabel: 'Image Text',
  },
  {
    title: 'Human Foods That Can Be Fatal to Dogs',
    description:
      'Eating any part of the avocado plant can cause severe health problems in dogs that may result in death.Eating foods that contain xylitol can cause a dog’s blood sugar to drop drastically. This can cause health problems, liver failure, and death.Consuming caffeine can cause abnormal heart rhythm or lung failure in dogs, which can ultimately lead to death. Coffee, tea, and other sources of caffeine should be kept away from dogs.Grapes and raisins are highly toxic to dogs. Even very small amounts can lead to kidney failure, which can be fatal.If a dog consumes alcohol, it can lead to serious health problems and even death. This can also happen if a dog eats raw yeast dough. You should avoid feeding salted foods to your dog and make sure fresh drinking water is always available.',
    image: 'https://image.petmd.com/files/styles/863x625/public/french-bulldog-dog-food-shutterstock_192515618.jpg?w=1080&q=75',
    imageLabel: 'Image Text',
  },
  {
    title: 'How Can You Tell If Your Cat is Overweight?',
    description:
      'There is no one “perfect weight” for a cat, but most should be about 9-11 pounds. To help determine a cat’s ideal weight and assess their overall health.We use something similar to evaluate cats, called the Body Condition Score (BCS) system similar to BMI in humans.Much more commonly, however, are the cats that rate above a BCS of 5. These cats have become too heavy for their frame, so they will look more block-like.From above, an overweight cat will look more like a rectangle than a nice, tapered figure 8. An overweight cat will have a belly that doesn’t come up to meet their hips but rather drags all the way down and sways when they walk.When petting an overweight cat, you won’t be able to feel any ribs or their backbone.',
    image: 'https://image.petmd.com/files/styles/863x625/public/fluffy-white-cat-resting-on-chair.jpg?w=1080&q=75',
    imageLabel: 'Image Text',
  },
  {
    title: 'How to Tell When a Cat Is Sick',
    description:
      'Cats that are not feeling well may just look a little “off.” The cat might sit in a hunched position, might not move as gracefully as before, might not lift its head properly, might have a head tilt, or might carry its tail in a different way than normal. Sometimes there is not any one thing that stands out, but instead a variety of subtle changes. Dehydration is a common problem in cats that are not well. To see if your cat is dehydrated, gently grasp her skin near her shoulder blades, pull it up and away from her body, then let go. The skin should snap back into place right away – skin that does not snap back into place, but stays ‘tented up’ usually indicates dehydration, a condition that needs to be treated right away.Cats that have some sort of chronic illness may develop slow and subtle weight loss that is only obvious when you actually run your hands along the ribs and spine.',
    image: 'https://image.petmd.com/files/styles/863x625/public/2022-04/cat-hiding.jpg?w=1080&q=75',
    imageLabel: 'Image Text',
  },
  {
    title: '5. Get Regular Vaccinations',
    description:
      'For optimal health, pets need regular vaccinations against diseases such as rabies, distemper, feline leukemia, and canine hepatitis.',
    image: 'https://image.petmd.com/files/styles/453x272/public/2022-10/gray.cat_.green_.eyes_.jpg?VersionId=2EEjOEA0WahpusTljP6Up8GPMIV8NPEp&amp;itok=Lm2XvSHy?w=640&q=75',
    imageLabel: 'Image Text',
  },
  {
    title: '6. Provide an Enriched Environment',
    description:
      'Pets need mental stimulation which may mean daily walks for your pooch, and scratching posts, window perches, and toys for your cat. It means play time with you, which not only keeps your pet’s muscles toned and boredom at bay, it also strengthens your bond with your four-footed companions.',
    image: 'https://image.petmd.com/files/styles/453x272/public/2022-05/guinea.pig_.yellow.flowers.jpg?w=640&q=75',
    imageLabel: 'Image Text',
  },
];

export default function Blog() {
  return (
    <div><br /><br /><br />
      <CssBaseline />
      <Container maxWidth="lg">
        <main>
          <MainFeaturedPost post={mainFeaturedPost} />
          <Grid>
            {featuredPosts.map((post) => (
              <div>
                <FeaturedPost key={post.title} post={post}  />
                <br></br>
              </div>
              ))}
          </Grid>
        </main>
      </Container>
    <br ></br>
    </ div>
  );
}