
document.addEventListener("DOMContentLoaded", function () {
  // Services interaction logic
  const level1Items = document.querySelectorAll('.workflow-level-1 div');
  const level2 = document.querySelector('.workflow-level-2');
  const level3 = document.querySelector('.workflow-level-3');

  const dataMap = {
    'Smart Data Collection': {
      subs: ['Web Data Scraping', 'Mobile App Data Extraction', 'Offline Source Digitization'],
      desc: {
        'Web Data Scraping': 'We extract information from websites automatically...',
        'Mobile App Data Extraction': 'We pull data directly from mobile apps...',
        'Offline Source Digitization': 'We digitize data from PDFs, images, or docs...'
      }
    },
    'Intelligent Data Processing': {
      subs: ['Data Cleaning', 'Data Formatting', 'Data Validation'],
      desc: {
        'Data Cleaning': 'We remove duplicates, errors, and irrelevant details...',
        'Data Formatting': 'We shape your data into the format you need...',
        'Data Validation': 'We check your data for consistency and accuracy...'
      }
    },
    'Flexible Data Delivery': {
      subs: ['Storage Solutions', 'Visual Reports & Analysis'],
      desc: {
        'Storage Solutions': 'We organize and store your data securely...',
        'Visual Reports & Analysis': 'We turn your data into simple dashboards...'
      }
    },
    'Powerful Data Automation': {
      subs: ['Workflow Automation', 'Monitoring & Change Detection', 'Task Scheduling', 'Real-Time Alerts'],
      desc: {
        'Workflow Automation': 'We automate your repetitive tasks...',
        'Monitoring & Change Detection': 'We watch your data sources for updates...',
        'Task Scheduling': 'We run tasks automatically on your schedule...',
        'Real-Time Alerts': 'We notify you when something important happens...'
      }
    }
  };

  level1Items.forEach(item => {
    item.addEventListener('mouseover', () => {
      const key = item.textContent.trim();
      const subItems = dataMap[key]?.subs || [];
      level2.innerHTML = '';
      subItems.forEach(sub => {
        const subDiv = document.createElement('div');
        subDiv.textContent = sub;
        subDiv.addEventListener('click', () => {
          level3.textContent = dataMap[key].desc[sub];
        });
        level2.appendChild(subDiv);
      });
      level3.textContent = 'Hover over and click a service to see details.';
    });
  });
});
