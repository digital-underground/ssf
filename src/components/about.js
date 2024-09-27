import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Avatar from '@mui/material/Avatar';

const teamMembers = [
  {
    name: 'Harold Gottschalk',
    title: 'CEO, Co-Founder and Chairman',
    description: 'Harold has over the last 35 years developed software, run teams, participated in corporations, won awards, contributed in a local IPO, created startups, his latest CSIdentity Corp. Harold believes the creation of software has evolved and is now for mere mortals, creating SSF for others to participate in the digital workforce.',
    image: './images/harold-gottschalk.jpeg',
  },
  {
    name: 'Steve Biafore',
    title: 'Analytics Advisor, Co-Founder',
    description: "Steve has built analytic “big data” solutions for the past 25 years. The powerful predictive models that stand at the core of these solutions have changed the way companies compete and the way industries operate. Steve is eager to help SSF apply analytic technology to change the way we learn–and to create new digital-economy career options for anyone with the energy and grit it takes to succeed.",
    image: './images/steve-biafore.jpeg',
  },
  {
    name: 'Julia Gottschalk',
    title: 'Executive Assistant, Co-Founder',
    description: 'Born in Germany, grew up in Brazil, studied English at a University in Atlanta, GA for 1 year. Graduated in Digital Journalism at UNESP, one of the best universities in Brazil. Now she is pursuing her Masters Degree in Media and Communication Sciences in the Technical University of Ilmenau, in Germany. "My new passion is learning about technology and how to apply that in the communication field".',
    image: './images/julia-gottschalk.jpeg',
  },
  {
    name: 'Ryn Corbeil',
    title: 'Co-Founder',
    description: "Obtaining his degree in Computer Science from Cal Poly San Luis Obispo, Ryn has been developing software for startups, established companies, and as a freelancer. He enjoys connecting with students, and seeing them reach the ‘aha’ moment. When not in front of a terminal, Ryn enjoys guitar, community theater, and reading.",
    image: './images/ryn-corbeil.jpeg',
  },
  {
    name: 'Matthew Herron',
    title: 'Advisory Board Member',
    description: 'Matt is a business litigation attorney who likes to win, hates to lose, and thinks that SoftStack Factory rules. He is deeply experienced in the fields of business litigation, partnership and business disputes, intellectual property and other property-related cases. He built his own firm that handles substantial cases against formidable adversaries represented by national law firms.',
    image: './images/matthew-herron.jpeg',
  },
  {
    name: 'Catherine Thiemann',
    title: 'Advisory Board Member',
    description: 'Catherine Thiemann is a non-traditional homeschooling parent who believes that tomorrow’s career paths may not be well-served by today’s “high school to college to entry level job” model. She’s excited about SoftStack Factory’s apprenticeship learning opportunity, especially for young people whose families can’t afford the high cost of a college degree. She looks forward to helping young people of color access this great gateway into the STEM-based field of mobile application programming.',
    image: './images/catherine-thiemann.jpeg',
  },
  {
    name: 'Jeanne Bridges',
    title: 'Community Relationships',
    description: 'San Diego has always been Jeanne’s home base where she cultivates relationships with members of the community from all walks of life from CEO’s to professionals to recently-homeless veterans. Her vocational and entrepreneurial experience gives Jeanne a special affinity for, and ability to communicate with, the candidates which SoftStack Factory expects to move into the digital economy.',
    image: './images/jeanne-bridges.jpeg',
  },
];

const volunteers = [
  {
    name: 'Scott Holcombe',
    title: 'CTO, SSF Labs',
    description: "Scott's career has been centered on bringing great products to market for longer than he'd care to admit. From a start as an impressionable software engineer wringing performance out of high-volume transaction processing systems for the credit card industry, to designing and building an award winning mobile phone, Scott ultimately started his own company providing cloud-based record label royalty software which was subsequently acquired by Sony Music.",
    image: './images/scott-holcombe.jpeg',
  },
  {
    name: 'Peter Horton',
    title: 'Program Director',
    description: 'Peter moved to San Diego as wine tour guide from Santa Barbara in 2015. Peter completed the SoftStack Factory full time immersion program. Peter went from knowing nothing about coding, with hard work, sacrifice, learned to code. Peter now advances the curricula, leads projects and facilitators at SoftStack Factory. Peter is an example of what can be accomplished when you pour yourself into the coding process 100%.',
    image: './images/peter-horton.jpeg',
  },
  {
    name: 'Michael Martin',
    title: 'SSF Labs',
    description: "Bio coming soon! Stay tuned to learn more.",
    image: './images/mike-martin.png',
  },
  {
    name: 'Robert Brown',
    title: 'SSF Labs, Former Facilitator',
    description: 'Bio coming soon! Stay tuned to learn more.',
    image: './images/rob-brown.png',
  },
  {
    name: 'Rhiannon Duvall',
    title: 'SSF Labs',
    description: "Bio coming soon! Stay tuned to learn more.",
    image: './images/rhiannon-duvall.png',
  },
  {
    name: 'Gino Llave',
    title: 'SSF Labs, Former Facilitator',
    description: "Bio coming soon! Stay tuned to learn more.",
    image: './images/gino-llave.png',
  },
  {
    name: 'Matthew Hess',
    title: 'SSF Labs, Former Facilitator',
    description: 'Bio coming soon! Stay tuned to learn more.',
    image: './images/matt-hess.png',
  },
  {
    name: 'John Brown',
    title: 'Former Facilitator',
    description: 'John an Eagle Scout, attended SSF beta course, was asked to join the SSF team. At SSF honed his skills on multiple software projects, assisted on our first official cohort in 2016. He is now looking to use his newly honed skills to teach others how to code apps and get a foothold in the coding industry.',
    image: './images/john-brown.jpeg',
  },
  {
    name: 'Danilo Carandang',
    title: 'Former Facilitator',
    description: 'Danilo was born and raised in San Diego and prior to discovering the world of coding taught music to elementary students in an afterschool program. He completed SSF’s Fall cohort in January 2017 and continued learning while working on various freelancing projects. He is now applying his skills as a teacher and the new skills from the program to help others dive into code and learn how to create applications.',
    image: './images/danilo-carandang.png',
  },
  {
    name: 'Khoa Nguyen',
    title: 'Former Facilitator',
    description: "Bio coming soon! Stay tuned to learn more.",
    image: './images/khoa-nguyen.png',
  },
  {
    name: 'Salvatore McCarty',
    title: 'Former Facilitator',
    description: 'Bio coming soon! Stay tuned to learn more.',
    image: './images/no-image.png',
  },
];

function About() {
  return (
    <Container
      id="about"
      sx={{
        pt: { xs: 4, sm: 12 },
        pb: { xs: 8, sm: 16 },
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: { xs: 3, sm: 6 },
      }}
    >
      <Box
        sx={{
          width: { sm: '100%', md: '80%' },
          textAlign: { sm: 'left', md: 'center' },
          paddingTop: '530vh',
        }}
      >
        <Typography component="h2" variant="h4" color="text.primary">
          Who We Were
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
          At SoftStack Factory, we believed technology careers should be accessible
          to everyone. We solved human problems with technology by connecting community to opportunity.
          SoftStack Factory was a network of students, volunteers, sponsors and partners empowering the
          local San Diego community.
        </Typography>
        <Typography component="h4" variant="h5" color="text.primary">
          Board Members
        </Typography>
      </Box>

      <Grid container spacing={4}>
        {teamMembers.map((member, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <CardMedia>
                <Avatar
                  alt={member.name}
                  src={member.image}
                  sx={{ width: 120, height: 120, mt: 2 }}
                />
              </CardMedia>
              <CardContent sx={{ flexGrow: 1, textAlign: 'center' }}>
                <Typography component="h3" variant="h6" color="text.primary">
                  {member.name}
                </Typography>
                <Typography variant="subtitle1" color="text.secondary">
                  {member.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                  {member.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      {/* =================NEW=================== */}
      <Box
        sx={{
          width: { sm: '100%', md: '80%' },
          textAlign: { sm: 'left', md: 'center' },
        }}
      >
        <Typography component="h4" variant="h5" color="text.primary">
          Team Members
        </Typography>
      </Box>

      <Grid container spacing={4}>
        {volunteers.map((member, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <CardMedia>
                <Avatar
                  alt={member.name}
                  src={member.image}
                  sx={{ width: 120, height: 120, mt: 2 }}
                />
              </CardMedia>
              <CardContent sx={{ flexGrow: 1, textAlign: 'center' }}>
                <Typography component="h3" variant="h6" color="text.primary">
                  {member.name}
                </Typography>
                <Typography variant="subtitle1" color="text.secondary">
                  {member.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                  {member.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

    </Container>
  );
}

export default About;
