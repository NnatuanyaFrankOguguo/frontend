'use client'
import React, { useEffect } from 'react'
import * as echarts from 'echarts';
const Testimonials = () => {

    useEffect(() => {
    // Initialize testimonials chart
    const chartDom = document.getElementById('testimonials-chart');
    if (chartDom) {
      const myChart = echarts.init(chartDom);
      const option = {
        animation: false,
        radar: {
          indicator: [
            { name: 'Creativity', max: 10 },
            { name: 'Composition', max: 10 },
            { name: 'Lighting', max: 10 },
            { name: 'Professionalism', max: 10 },
            { name: 'Timeliness', max: 10 }
          ],
          radius: 100,
          axisName: {
            color: '#f5f5f5',
            fontSize: 12
          },
          splitArea: {
            areaStyle: {
              color: ['rgba(255, 255, 255, 0.03)']
            }
          },
          axisLine: {
            lineStyle: {
              color: 'rgba(255, 255, 255, 0.2)'
            }
          },
          splitLine: {
            lineStyle: {
              color: 'rgba(255, 255, 255, 0.2)'
            }
          }
        },
        series: [
          {
            name: 'Client Ratings',
            type: 'radar',
            data: [
              {
                value: [9.8, 9.5, 9.7, 9.9, 9.6],
                name: 'Client Satisfaction',
                areaStyle: {
                  color: 'rgba(196, 164, 132, 0.4)'
                },
                lineStyle: {
                  color: '#C4A484'
                },
                itemStyle: {
                  color: '#C4A484'
                }
              }
            ]
          }
        ],
        textStyle: {
          color: '#f5f5f5'
        }
      };
      myChart.setOption(option);

      const handleResize = () => {
        myChart.resize();
      };

      window.addEventListener('resize', handleResize);
      return () => {
        window.removeEventListener('resize', handleResize);
        myChart.dispose();
      };
    }
  }, []);


  return (
    <section id="testimonials" className="py-20 md:py-32 bg-black/50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-serif mb-4 text-center text-[#C4A484]">Client Testimonials</h2>
          <p className="text-center max-w-2xl mx-auto mb-16 opacity-80">Hear what clients have to say about their experience working with me.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              {[
                {
                  name: "Emily & Michael",
                  role: "Wedding Clients",
                  quote: "Roy captured our wedding day with such artistry and emotion. The photos tell our story in a way we couldn't have imagined - each image feels like a cinematic moment frozen in time."
                },
                {
                  name: "Sarah Johnson",
                  role: "Portrait Client",
                  quote: "Working with Roy was transformative. He has an incredible ability to make you feel comfortable while capturing your essence in the most flattering, authentic way possible."
                },
                {
                  name: "Vogue Magazine",
                  role: "Editorial Client",
                  quote: "Roy's distinctive visual language and technical precision make him one of the most sought-after photographers in the industry. His work consistently elevates our editorial vision."
                }
              ].map((testimonial, index) => (
                <div key={index} className="bg-black/30 p-8 rounded-sm">
                  <div className="flex items-center mb-4">
                    <div className="text-[#C4A484] text-2xl mr-2">
                      <i className="fas fa-quote-left"></i>
                    </div>
                    <div className="h-px flex-grow bg-[#C4A484]/30"></div>
                  </div>
                  <p className="italic mb-6 opacity-90">{testimonial.quote}</p>
                  <div className="flex items-center">
                    <div className="text-[#C4A484]">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                    </div>
                    <div className="ml-auto">
                      <p className="font-medium">{testimonial.name}</p>
                      <p className="text-sm opacity-70">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div>
              <div id="testimonials-chart" className="w-full h-[400px]"></div>
              <div className="text-center mt-6 opacity-80">
                <p>Average client satisfaction ratings across key performance areas</p>
                <p className="text-sm mt-2">Based on 150+ client reviews</p>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Testimonials