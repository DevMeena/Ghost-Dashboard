const request = require('request');

const links = [
  'https://ghost-bog.ipxp.in/all-you-need-to-know-about-blue-green-deployments/',
  'https://www.redhat.com/en/blog/faq-updates',
  'https://www.redhat.com/en/blog/faq-centos-stream-updates',
  'https://ghost-blog.ipxp.in/content/images/2021/07/Fedora.jpg',
  'https://ghost-blog.ipxp.in/content/images/2021/07/Stream.jpg',
  'https://ghost-blog.ipxp.in/content/images/size/w600/2021/07/Fedora.jpg',
  'https://ghost-blog.ipxp.in/content/images/size/w1000/2021/07/Fedora.jpg',
  'https://ghost-blog.ipxp.in/content/images/2021/07/Fedora.jpg',
  'https://ghost-blog.ipxp.in/content/images/size/w600/2021/07/Stream.jpg',
  'https://ghost-blog.ipxp.in/content/images/size/w1000/2021/07/Stream.jpg',
  'https://ghost-blog.ipxp.in/content/images/2021/07/Stream.jpg',
  'https://public.vegastack.com/dist/p/Blue-Green-Deployment-Benefits.pdf',
  'https://ghost-blog.ipxp.in/content/images/2021/07/folder-2.png',
  'https://ghost-blog.ipxp.in/content/images/2021/07/Blue-Green-Deployment-Architecture-1.png',
  'https://ghost-blog.ipxp.in/content/images/2021/07/Benefits-of-Blue-Green-Deployments.png',
  'https://ghost-blog.ipxp.in/content/images/size/w600/2021/07/folder-2.png',
  'https://ghost-blog.ipxp.in/content/images/size/w1000/2021/07/folder-2.png',
  'https://ghost-blog.ipxp.in/content/images/size/w1600/2021/07/folder-2.png',
  'https://ghost-blog.ipxp.in/content/images/size/w2400/2021/07/folder-2.png',
  'https://ghost-blog.ipxp.in/content/images/size/w600/2021/07/Blue-Green-Deployment-Architecture-1.png',
  'https://ghost-blog.ipxp.in/content/images/size/w1000/2021/07/Blue-Green-Deployment-Architecture-1.png',
  'https://ghost-blog.ipxp.in/content/images/size/w1600/2021/07/Blue-Green-Deployment-Architecture-1.png',
  'https://ghost-blog.ipxp.in/content/images/2021/07/Blue-Green-Deployment-Architecture-1.png',
  'https://ghost-blog.ipxp.in/content/images/size/w600/2021/07/Benefits-of-Blue-Green-Deployments.png',
  'https://ghost-blog.ipxp.in/content/images/size/w1000/2021/07/Benefits-of-Blue-Green-Deployments.png',
  'https://ghost-blog.ipxp.in/content/images/size/w1600/2021/07/Benefits-of-Blue-Green-Deployments.png',
  'https://ghost-blog.ipxp.in/content/images/2021/07/Benefits-of-Blue-Green-Deployments.png',
  'https://en.wikipedia.org/wiki/Waterfall_model',
  'https://en.wikipedia.org/wiki/Code_coverage',
  'https://ghost-blog.ipxp.in/content/images/2020/08/continuous-integration-continuous-deployment-summary-pwslab.png',
  'https://nvie.com/posts/a-successful-git-branching-model/',
  'https://ghost-blog.ipxp.in/content/images/2020/07/cloud-768x512-1.jpg',
  'https://ghost-blog.ipxp.in/content/images/2020/07/env-768x264-2.png',
  'https://vegastack.com/?utm_source=vegastack-blog&utm_medium=blog-website',
  'https://www.anse.com/',
  'https://jenkins.io/',
  'https://prometheus.io/',
  'http://kanboard.net/',
  'https://www.bugzilla.org/',
  'https://github.com/ansible',
  'https://jenkins.io/',
  'https://kubernetes.io/',
  'https://www.sonarqube.org/',
  'https://pwslab.com/?utm_source=vegastack-blog&utm_medium=blog-website',
  'https://ghost-blog.ipxp.in/content/images/2020/07/serverless-architecture.png',
];

for (let i = 0; i < links.length; i++) {
  request(links[i], function (error, response, body) {
    if (error !== null) {
      console.log('Error Found in ', i);
    }
    if (response) {
      if (response.statusCode === 200) {
        console.log(i, 'valid');
      } else {
        console.log(i, 'invalid');
      }
    }
    // console.log('body:', body); // Print the HTML for the Google homepage.
  });
}
