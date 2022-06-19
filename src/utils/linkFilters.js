import axios from 'axios';
// import jQuery from 'jquery';
// import request from 'request';
// var brokenLink = require('broken-link');
// import urlExist from 'url-exist';

const getSrcSetUrls = (urls) => {
  let possibleUrls = urls.split(' ');
  console.log(possibleUrls);
  let srcSetUrls = possibleUrls.filter((url) => {
    if (url.includes('http')) {
      return url;
    }
  });
  console.log(srcSetUrls);
  return srcSetUrls;
};

const isGhostLink = (url) => {
  if (url.includes('https://ghost-blog.ipxp.in')) return true;
  else return false;
};

const isBroken = async (url) => {
  const exists = await axios
    .get(url)
    .then((res) => {
      console.log(res.status);
      return false;
    })
    .catch((e) => {
      console.log(e);
      return true;
    });

  return exists;
};

export const filterLinks = (posts) => {
  var response = {
    totalLinks: 0,
    totalInternalLinks: 0,
    totalExternalLinks: 0,
    internalLinks: [],
    externalLinks: [],
    urls: [],
  };
  const urls = [];
  if (posts) {
    posts.forEach((post) => {
      const rawHTML = '<html><body>' + post.html + '</body></html>';
      var doc = document.createElement('html');
      doc.innerHTML = rawHTML;
      var links = doc.getElementsByTagName('a');
      var src = doc.getElementsByTagName('img');
      var srcset = doc.getElementsByTagName('img');
      for (let i = 0; i < links.length; i++) {
        urls.push(links[i].getAttribute('href'));
      }
      for (let i = 0; i < src.length; i++) {
        urls.push(src[i].getAttribute('src'));
      }
      for (let i = 0; i < srcset.length; i++) {
        let srcseturls = srcset[i].getAttribute('srcset');
        if (srcseturls !== null) {
          let srcseturl = getSrcSetUrls(srcseturls);
          //   srcUrls.push(srcseturl);
          urls.push(...srcseturl);
        }
      }
    });
    // console.log(urls);

    const internalLinks = [];
    const externalLinks = [];

    urls.forEach((url) => {
      if (isGhostLink(url)) internalLinks.push(url);
      else externalLinks.push(url);
    });

    response = {
      totalLinks: urls.length,
      totalInternalLinks: internalLinks.length,
      totalExternalLinks: externalLinks.length,
      internalLinks: internalLinks,
      externalLinks: externalLinks,
      urls: urls,
    };
  }
  return response;
};

// function UrlExists(url, cb) {
//   jQuery.ajax({
//     url: url,
//     dataType: 'text',
//     type: 'GET',
//     crossDomain: true,
//     complete: function (xhr) {
//       if (typeof cb === 'function') cb.apply(this, [xhr.status]);
//     },
//   });
// }

// function checkImage(url) {
//   var request = new XMLHttpRequest();
//   request.open('GET', url, true);
//   request.send();
//   request.onload = function () {
//     let status = request.status;
//     if (request.status == 200) {
//       //if(statusText == OK)
//       console.log('image exists');
//     } else {
//       console.log("image doesn't exist");
//     }
//   };
// }

// console.log(urls);

//   urls.forEach((url) => {
//     // checkImage(url);
//     UrlExists(url, function (status) {
//       if (status === 404) {
//         if (isGhostLink(url)) response.brokenInternalLinks.push(url);
//         else response.brokenExternalLinks.push(url);
//       }
//     });
//   });

//   console.log('response is ', response);

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

function urlExists(url, callback) {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      callback(xhr.status < 400);
    }
  };
  xhr.open('HEAD', url);
  xhr.send();
}

export const isBrokenLink = (urls) => {
  const response = {
    brokenInternalLinks: [],
    brokenExternalLinks: [],
  };
  const responses = [];

  const headers = {
    // 'Content-Type': 'application/json',
    'Content-Type': 'text/plain',
  };

  //   for (let i = 0; i < urls.length; i++) {
  //     // responses.push(await urlExist(urls[i]));
  //     responses.push(await axios.get(urls[i], headers));
  //   }
  var fine = 0,
    nofine = 0;
  for (let i = 0; i < urls.length; i++) {
    urlExists(urls[i], function (exists) {
      console.log('"%s" exists?', urls[i], exists);
      if (!exists) {
        responses.push(urls[i]);
      }
    });
    // var dat = fetch(urls[i], {
    //   mode: 'cors',
    //   cache: 'no-cache',
    //   credentials: 'include',
    //   headers: {
    //     'Access-Control-Allow-Origin': `http://localhost:3000`,
    //     'Content-Type': 'application/json',
    //   },
    // })
    //   .then((data) => {
    //     console.table(data);
    //     return data.url;
    //   })
    //   .catch((e) => {
    //     console.log(e);
    //     return e;
    //   });
    // responses.push(dat);
  }
  // console.log(dat);
  // console.log(fine, nofine);

  //   urlExist(
  //     'https://stackoverflow.com/questions/61238680/access-to-fetch-at-from-origin-http-localhost3000-has-been-blocked-by-cors'
  //   )
  //     .then((res) => {
  //       console.log(res);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });

  console.log(responses);

  //   brokenLink('http://non-existing-domain-name.com').then(function (answer) {
  //     console.log('link is%s broken', answer ? '' : ' not'); // link is broken
  //   });

  return true;

  //   for (let i = 0; i < links.length; i++) {
  //     request(links[i], function (error, response, body) {
  //       if (error !== null) {
  //         console.log('Error Found in ', i);
  //       }
  //       if (response) {
  //         if (response.statusCode === 200) {
  //           console.log(i, 'valid');
  //         } else {
  //           console.log(i, 'invalid');
  //         }
  //       }
  //       // console.log('body:', body); // Print the HTML for the Google homepage.
  //     });
  //   }

  //   return response;
};

// const brokenInternalLinks = [];
// const brokenExternalLinks = [];

// internalLinks.forEach((url) => {
//   if (!isBroken(url)) {
//     brokenInternalLinks.push(url);
//   }
// });

// externalLinks.forEach((url) => {
//   if (!isBroken(url)) {
//     brokenExternalLinks.push(url);
//   }
// });

// console.log(brokenInternalLinks);
// console.log(brokenExternalLinks);
