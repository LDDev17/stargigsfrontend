
import styles from './AddPerformer.module.css';

function AddPerformer() {
  return (
    <>
      <div className={styles.div}>
        <img
          loading="lazy"
          srcSet=""
          className={styles.img}
        />
        <div className={styles.navigation}>
          <div className={styles.div2}>
            <div className={styles.div3}>
              <div className={styles.div4} />
              <div className={styles.div5}>
                <div className={styles.div6}>
                  <img
                    loading="lazy"
                    src="Notifications.png"
                    className={styles.img2}
                  />
                  <div className={styles.div7}>
                    <div className={styles.profil}>
                      <img
                        loading="lazy"
                        srcSet="profile4.png"
                        className={styles.img3}
                      />
                      <div className={styles.content}>
                        <div className={styles.content2}>Hello!</div>
                        <div className={styles.title}>Andrew Smith</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.iconChevron}>
                <img
                  loading="lazy"
                  src="dropdown.png"
                  className={styles.img4}
                />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.div8}>
          <div className={styles.div9}>
            <div className={styles.column}>
              <div className={styles.sidebarPerformer}>
                <div className={styles.div10}>
                  <div className={styles.div11}>
                    <div className={styles.div12}>
                      <img
                        loading="lazy"
                        srcSet="DarkLogo.png"
                        className={styles.img5}
                      />
                    </div>
                    <div className={styles.div13}>
                      <div className={styles.divider} />
                    </div>
                  </div>
                  <div className={styles.div14}>
                    <div className={styles.div15}>
                      <div className={styles.chip}>
                        <div className={styles.performer}>Performer</div>
                      </div>
                    </div>
                    <div className={styles.navigation2}>
                      <div className={styles.title2}>Main</div>
                      <div className={styles.dashboardNavitem}>
                        <img
                          loading="lazy"
                          src="dashboardIcon.png"
                          className={styles.img6}
                        />
                        <div className={styles.label}>Dashboard</div>
                      </div>
                      <div className={styles.performancesNavitem}>
                        <div className={styles.talentcard} />
                        <div className={styles.label}>Performances</div>
                      </div>
                      <div className={styles.gigsNavitem}>
                        <img
                          loading="lazy"
                          src="Gigs.png"
                          className={styles.img7}
                        />
                        <div className={styles.label}>Gigs</div>
                      </div>
                      <div className={styles.messagesNavitem}>
                        <img
                          loading="lazy"
                          src="messages.png"
                          className={styles.img8}
                        />
                        <div className={styles.label2}>Messages</div>
                        <div className={styles.badge}>2</div>
                      </div>
                      <div className={styles.calendarNavitem}>
                        <img
                          loading="lazy"
                          src="calendar.png"
                          className={styles.img9}
                        />
                        <div className={styles.label}>Calendar</div>
                      </div>
                      <div className={styles.paymentsNavitem}>
                        <img
                          loading="lazy"
                          src="payments.png"
                          className={styles.img10}
                        />
                        <div className={styles.label}>Payments</div>
                      </div>
                      <div className={styles.profileNavitem}>
                        <img
                          loading="lazy"
                          src="profileicon.png"
                          className={styles.img11}
                        />
                        <div className={styles.label}>Profile</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.div16}>
                  <div className={styles.divider} />
                </div>
                <div className={styles.navigation3}>
                  <div className={styles.title3}>Settings</div>
                  <div className={styles.settingsNavitem}>
                    <img
                      loading="lazy"
                      src="settings.png"
                      className={styles.img12}
                    />
                    <div className={styles.label}>Settings</div>
                  </div>
                </div>
                <div className={styles.navigation4}>
                  <div className={styles.messagesNavitem2}>
                    <img
                      loading="lazy"
                      src="Help.png"
                      className={styles.img13}
                    />
                    <div className={styles.label}>Help</div>
                  </div>
                </div>
                <div className={styles.button}>
                  <img
                    loading="lazy"
                    src="previous.png"
                    className={styles.img14}
                  />
                </div>
              </div>
            </div>
            <div className={styles.column2}>
              <div className={styles.div17}>
                <div className={styles.div18}>
                  <div className={styles.div19}>
                    <div className={styles.addNewPerformance}>
                      Add New Performance
                    </div>
                    <div className={styles.toshowcaseyourtalentandstartgettingbookedforgigs}>
                      – To showcase your talent and start getting booked for
                      gigs.
                    </div>
                  </div>
                  <div className={styles.div20}>
                    <div className={styles.buttonPrimary}>Cancel</div>
                    <div className={styles.buttonPrimary2}>Save Performance</div>
                  </div>
                </div>
                <div className={styles.div21}>
                  <div className={styles.gigTypeInput}>
                    <div className={styles.gigType}>Gig Type</div>
                    <div className={styles.inputfield}>
                      <div className={styles.selectthegigtype}>
                        Select the gig type
                      </div>
                      <img
                        loading="lazy"
                        src="dropdown.png"
                        className={styles.img15}
                      />
                    </div>
                  </div>
                  <div className={styles.input}>
                    <div className={styles.title4}>Title</div>
                    <div className={styles.inputfield2}>Enter performance title</div>
                  </div>
                </div>
                <div className={styles.div22}>
                  <div className={styles.div23}>
                    <div className={styles.column3}>
                      <div className={styles.div24}>
                        <div className={styles.input2}>
                          <div className={styles.location}>Location</div>
                          <div className={styles.inputfield3}>
                            <div className={styles.selectlocation}>
                              Select location
                            </div>
                            <img
                              loading="lazy"
                              src="dropdown.png"
                              className={styles.img16}
                            />
                          </div>
                        </div>
                        <div className={styles.pricing}>
                          <div className={styles.title5}>Rate per Hour</div>
                          <div className={styles.inputfield4}>
                            <div className={styles.div25}>
                              <img
                                loading="lazy"
                                src="payments.png"
                                className={styles.img17}
                              />
                              <div className={styles.css000}>0.00</div>
                            </div>
                            <div className={styles.usd}>USD</div>
                            <img
                              loading="lazy"
                              src="updown.png"
                              className={styles.img18}
                            />
                          </div>
                        </div>
                        <div className={styles.selectYourAvailability}>
                          Select Your Availability
                        </div>
                        <div className={styles.calendarLightMode}>
                          <div className={styles.components}>
                            <div className={styles.div26}>
                              <img
                                loading="lazy"
                                src="previous.png"
                                className={styles.img19}
                              />
                              <div className={styles.div27}>
                                <div className={styles.month}>
                                  <div className={styles.div28}>
                                    <div className={styles.april}>April</div>
                                    <img
                                      loading="lazy"
                                      src="Down.png"
                                      className={styles.img20}
                                    />
                                  </div>
                                </div>
                                <div className={styles.year}>
                                  <div className={styles.div29}>
                                    <div>2025</div>
                                    <img
                                      loading="lazy"
                                      src="Down.png"
                                      className={styles.img21}
                                    />
                                  </div>
                                </div>
                              </div>
                              <img
                                loading="lazy"
                                src="Next.png"
                                className={styles.img22}
                              />
                            </div>
                            <div className={styles.dayofWeek}>
                              <div className={styles.doWRegular}>
                                <div className={styles.mo}>Mo</div>
                              </div>
                              <div className={styles.doWRegular}>
                                <div className={styles.mo2}>Tu</div>
                              </div>
                              <div className={styles.doWRegular}>
                                <div className={styles.mo3}>We</div>
                              </div>
                              <div className={styles.doWRegular2}>
                                <div className={styles.mo4}>Th</div>
                              </div>
                              <div className={styles.doWRegular}>
                                <div className={styles.mo5}>Fr</div>
                              </div>
                              <div className={styles.doWRegular}>
                                <div className={styles.mo6}>Sa</div>
                              </div>
                              <div className={styles.doWRegular}>
                                <div className={styles.mo7}>Su</div>
                              </div>
                            </div>
                            <div className={styles.weeks}>
                              <div className={styles.week1}>
                                <div className={styles.div30}>
                                  <div className={styles.css0}>31</div>
                                </div>
                                <div className={styles.div31}>
                                  <div className={styles.css02}>1</div>
                                </div>
                                <div className={styles.div32}>
                                  <div className={styles.css03}>2</div>
                                </div>
                                <div className={styles.div33}>
                                  <div className={styles.css04}>3</div>
                                </div>
                                <div className={styles.div34}>
                                  <div className={styles.css05}>4</div>
                                </div>
                                <div className={styles.div35}>
                                  <div className={styles.css06}>5</div>
                                </div>
                                <div className={styles.div36}>
                                  <div className={styles.css07}>6</div>
                                </div>
                              </div>
                              <div className={styles.week6}>
                                <div className={styles.div37}>
                                  <div className={styles.css08}>7</div>
                                </div>
                                <div className={styles.div38}>
                                  <div className={styles.css09}>8</div>
                                </div>
                                <div className={styles.div39}>
                                  <div className={styles.css010}>9</div>
                                </div>
                                <div className={styles.div40}>
                                  <div className={styles.css011}>10</div>
                                </div>
                                <div className={styles.div41}>
                                  <div className={styles.css012}>11</div>
                                </div>
                                <div className={styles.div42}>
                                  <div className={styles.css013}>12</div>
                                </div>
                                <div className={styles.div43}>
                                  <div className={styles.css014}>13</div>
                                </div>
                              </div>
                              <div className={styles.week7}>
                                <div className={styles.div44}>
                                  <div className={styles.css015}>14</div>
                                </div>
                                <div className={styles.div45}>
                                  <div className={styles.css016}>15</div>
                                </div>
                                <div className={styles.div46}>
                                  <div className={styles.css017}>16</div>
                                </div>
                                <div className={styles.div47}>
                                  <div className={styles.css018}>17</div>
                                </div>
                                <div className={styles.div48}>
                                  <div className={styles.css019}>18</div>
                                </div>
                                <div className={styles.div49}>
                                  <div className={styles.css020}>19</div>
                                </div>
                                <div className={styles.div50}>
                                  <div className={styles.css021}>20</div>
                                </div>
                              </div>
                              <div className={styles.week8}>
                                <div className={styles.div51}>
                                  <div className={styles.css022}>21</div>
                                </div>
                                <div className={styles.div52}>
                                  <div className={styles.css023}>22</div>
                                </div>
                                <div className={styles.div53}>
                                  <div className={styles.css024}>23</div>
                                </div>
                                <div className={styles.div54}>
                                  <div className={styles.css025}>24</div>
                                </div>
                                <div className={styles.div55}>
                                  <div className={styles.css026}>25</div>
                                </div>
                                <div className={styles.div56}>
                                  <div className={styles.css027}>26</div>
                                </div>
                                <div className={styles.div57}>
                                  <div className={styles.css028}>27</div>
                                </div>
                              </div>
                              <div className={styles.week9}>
                                <div className={styles.div58}>
                                  <div className={styles.css029}>28</div>
                                </div>
                                <div className={styles.div59}>
                                  <div className={styles.css030}>29</div>
                                </div>
                                <div className={styles.div60}>
                                  <div className={styles.css031}>30</div>
                                </div>
                                <div className={styles.div61}>
                                  <div className={styles.css032}>1</div>
                                </div>
                                <div className={styles.div62}>
                                  <div className={styles.css033}>2</div>
                                </div>
                                <div className={styles.div63}>
                                  <div className={styles.css034}>3</div>
                                </div>
                                <div className={styles.div64}>
                                  <div className={styles.css035}>4</div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.div65}>
                          <div className={styles.buttonPrimaryXs}>
                            <div className={styles.send}>Block Dates</div>
                            <img
                              loading="lazy"
                              src="Clear.png"
                              className={styles.img23}
                            />
                          </div>
                          <div className={styles.buttonPrimaryXs2}>
                            <div className={styles.send}>Mark as Available</div>
                            <img
                              loading="lazy"
                              src=""
                              className={styles.img24}
                            />
                          </div>
                        </div>
                        <div className={styles.quickTipSelectdatesfromthecalendarandchoosetomarkthemasavailableorunavailableforbookings}>
                          Quick Tip:{" "}
                          <span style={{ color: "rgba(80,81,86,1)" }}>
                            Select dates from the calendar and choose to mark
                            them as available or unavailable for bookings.
                          </span>
                        </div>
                        <div className={styles.div66}>
                          <div className={styles.div67} />
                          <div>Available</div>
                          <div className={styles.div68}>
                            <div className={styles.div69} />
                            <div>Unavailable</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.column4}>
                      <div className={styles.div70}>
                        <div className={styles.descriptionInput}>
                          <div className={styles.title6}>Description</div>
                          <div className={styles.inputfield5}>
                            Tell us about your performance
                          </div>
                        </div>
                       
                        <div className={styles.uploadImageVideo2}>
  Upload Thumbnail
</div>
<div className={styles.div73}>
  <img
    loading="lazy"
    src="upload.png"
  />
  <div className={styles.div74}>
    <div className={styles.dropimagevideoorclicktoupload}>
      Drop image or click to{" "}
      <span style={{ color: "rgba(244,94,0,1)" }}>
        upload
      </span>
    </div>
    <div className={styles.supportsjpgpngmp4}>
      Supports: .jpg, .png
    </div>
  </div>
</div>

                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  );
}

export default AddPerformer